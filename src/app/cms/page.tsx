"use client";

import "@/app/calendar.css";
import { SELECTOR_CMS_CONFIRM_DELETE_ARTICLE_MODAL_ID } from "@/constants";
import {
  ROUTE_ARTICLES,
  ROUTE_CMS_API_ARTICLES,
  ROUTE_CMS_BLOG_EDIT,
} from "@/constants/route";
import { ArticleMetadata } from "@/services/metadata/types";
import { format, startOfDay } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import Calendar from "react-calendar";
import toast from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { groupItems } from "./_utils";
import ArticlePreviewItem from "./components/article-preview-item";
import CreateBlogNavButton from "./components/cms-nav-buttons/create-blog-nav-button";
import ConfirmActionModal from "./components/confirm-action-modal";

const fetchArticles = async (url: string) => {
  const response = await fetch(url);
  return response.json() as Promise<ArticleMetadata[]>;
};

const deleteArticles = async (
  url: string,
  { arg: { id } }: { arg: { id: string } }
) => {
  const response = await fetch(`${url}/${id}`, { method: "DELETE" });
  return response.json() as Promise<boolean>;
};

export default function CMSMainPage() {
  const [viewDate, setViewDate] = useState(Date.now());
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const { data, isLoading } = useSWR(
    `${ROUTE_CMS_API_ARTICLES}`,
    fetchArticles
  );
  const { push } = useRouter();
  const { trigger: deleteArticle, isMutating: isDeletingArticle } =
    useSWRMutation(ROUTE_CMS_API_ARTICLES, deleteArticles);

  const articleGroups = useMemo(() => {
    const articleGroupsByDate = data
      ? groupItems(data, (article) => startOfDay(article.createdAt).getTime())
      : {};
    return Object.entries(articleGroupsByDate).sort(([a], [b]) => +a - +b);
  }, [data]);

  const requestDeleteArticle = useCallback((id: string) => {
    setPendingDeleteId(id);
    (document.getElementById(
      SELECTOR_CMS_CONFIRM_DELETE_ARTICLE_MODAL_ID
    ) as HTMLDialogElement)!.showModal();
  }, []);

  const onCancelDeleteArticle = useCallback(() => {
    setPendingDeleteId(null);
    (document.getElementById(
      SELECTOR_CMS_CONFIRM_DELETE_ARTICLE_MODAL_ID
    ) as HTMLDialogElement)!.close();
  }, []);

  const confirmDeleteArticle = useCallback(() => {
    if (pendingDeleteId === null) return;
    deleteArticle({ id: pendingDeleteId })
      .then(() => {
        toast.success("Article deleted");
        onCancelDeleteArticle();
      })
      .catch(() => {
        toast.error("Failed to delete article");
      });
  }, [pendingDeleteId, deleteArticle]);

  return (
    <>
      <CreateBlogNavButton />
      <ConfirmActionModal
        loading={isDeletingArticle}
        id={SELECTOR_CMS_CONFIRM_DELETE_ARTICLE_MODAL_ID}
        onConfirm={confirmDeleteArticle}
        onCancel={onCancelDeleteArticle}
      />
      <div className="flex flex-col gap-2 p-4">
        <h2>Article list</h2>
        {isLoading && (
          <div className="loading loading-spinner loading-lg aspect-square self-center" />
        )}
        <div className="flex flex-col lg:flex-row gap-2">
          <Calendar className="flex-shrink-0" />
          <div className="flex-1 flex flex-col gap-2">
            {articleGroups.map(([day, articles]) => (
              <div key={day} className="flex flex-col gap-2">
                <h3>{format(+day, "dd/MM/yyyy")}</h3>
                {articles.map((article) => (
                  <ArticlePreviewItem
                    className="w-full"
                    onView={() =>
                      push(`${ROUTE_ARTICLES}/${article.readableURLName}`)
                    }
                    onEdit={() =>
                      push(
                        `${ROUTE_CMS_BLOG_EDIT}/${
                          article._id as unknown as string
                        }`
                      )
                    }
                    onDelete={() =>
                      requestDeleteArticle(article._id as unknown as string)
                    }
                    preview={article}
                    key={article._id as unknown as string}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
