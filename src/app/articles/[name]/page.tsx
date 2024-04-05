import { ROUTE_ARTICLES } from "@/constants/route";
import ArticleService from "@/services/articles";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { format } from "date-fns";
import "./article.css";
import code from "./components/article-code-block";

type Props = {
  params: { name: string };
};

export async function generateMetadata(
  { params: { name } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const details = await new ArticleService().getArticleDetailsByReadableUrlName(
    name
  );
  if (!details) return {};
  return {
    title: `${details.title} - TOP Blog`,
    description: details.summary,
    openGraph: {
      title: details.title,
      description: details.summary,
      type: "article",
    },
  };
}

export default async function ArticleViewPage({ params: { name } }: Props) {
  const articleContent =
    await new ArticleService().getArticleDetailsByReadableUrlName(name);
  if (!articleContent?.public) {
    redirect(ROUTE_ARTICLES);
  }

  return (
    <main className="flex flex-col p-4 items-center">
      <div className="w-full flex flex-col items-center lg:items-start gap-2 py-4 lg:py-8">
        <h1>{articleContent.title}</h1>
        <h5>By Travis on {format(articleContent.modifiedAt, "dd/MM/yyyy")}</h5>
      </div>
      <article className="w-full lg:w-3/4">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code,
          }}
        >
          {articleContent.content}
        </Markdown>
      </article>
    </main>
  );
}
