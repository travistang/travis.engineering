"use client";

import { ArticleDetails } from "@/services/articles";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle, FaPhotoVideo, FaTrash } from "react-icons/fa";
import useArticleUpload from "../../_hooks/use-article-upload";
import useMediaCrud from "../../_hooks/use-media-crud";
import MediaUpload from "../../create/components/media-upload";
import Section from "../../create/components/section";
import { useMetadataForm } from "./_utils/metadata-form";
import MetadataForm from "./metadata-form";

type Props = {
  pageTitle?: string;
  articleId: string;
  initialDetails?: ArticleDetails;
};

export default function CreateEditPage({
  pageTitle,
  articleId,
  initialDetails,
}: Props) {
  const [metadata, updateMetadataForm] = useMetadataForm(initialDetails);
  const { push } = useRouter();
  const [content, setContent] = useState(initialDetails?.content ?? "");
  const onCopyMediaURL = (url: string) => {
    navigator.clipboard.writeText(`![image](${url})`);
    toast.success("Media URL copied to clipboard!");
  };
  const { isUploading: isUploadingArticle, upload: uploadArticle } =
    useArticleUpload(articleId);
  const { media, isUploading, uploadMedia, isLoading, deleteMedia } =
    useMediaCrud(articleId);

  const confirmUploadArticle = async () => {
    if (!metadata.title) {
      toast.error("Title cannot be empty!");
      return;
    }
    if (!content) {
      toast.error("Content cannot be empty!");
      return;
    }
    return uploadArticle({ metadata, article: content }).then(() =>
      push("/cms")
    );
  };

  return (
    <div className="flex flex-col item-stretch py-4 px-2 gap-4">
      <div className="py-4 flex items-center justify-between pr-4 pl-2">
        <h1 className="text-4xl">{pageTitle}</h1>
        <button onClick={confirmUploadArticle} className="btn btn-success">
          {isUploadingArticle ? (
            <span className="loading loading-spinner" />
          ) : (
            <>
              <FaCheckCircle />
              Publish
            </>
          )}
        </button>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
        <MetadataForm metadata={metadata} onChange={updateMetadataForm} />
        <Section className="col-span-1 gap-4" title="Media" icon={FaPhotoVideo}>
          <MediaUpload isUploading={isUploading} uploadMedia={uploadMedia} />
          {isLoading && (
            <span className="loading loading-spinner loading-lg self-center" />
          )}
          <div className="flex lg:flex-col flex-nowrap overflow-x-auto snap-x gap-2">
            {media?.map((meta) => (
              <div
                key={meta.url}
                className="relative rounded-lg w-24 h-24 lg:w-48 lg:h-48 aspect-square flex flex-col overflow-hidden"
              >
                <img
                  src={meta.url}
                  alt={meta.name}
                  className="w-full h-full object-cover"
                  onClick={() => onCopyMediaURL(meta.url)}
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-neutral-700/75 flex items-center justify-between text-xs italic p-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {meta.name}
                  <button
                    onClick={() => deleteMedia(meta.url)}
                    className="btn btn-ghost btn-circle btn-error btn-xs"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <MDEditor
          autoFocus
          className="col-span-4 h-full"
          value={content}
          onChange={(v) => setContent(v ?? "")}
        />
      </div>
    </div>
  );
}
