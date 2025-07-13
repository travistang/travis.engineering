import { getArticle, listArticles } from "@/services/articles";

import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { redirect } from "next/navigation";
import path from "path";

import "./article.css";
import code from "./components/article-code-block";
import { ArticleHeader } from "./components/article-header";
import { ArticleImage } from "./components/article-image";
import { BlogImageContent } from "./components/blog-image-content";
import { CodeWithFileName } from "./components/code-with-filename";
import MathEquation from "./components/math-equation";
import { PrerequisiteSection } from "./components/prerequisite-section";

export async function generateStaticParams() {
  const articles = await listArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const details = await getArticle(slug);
  if (!details) return {};
  return {
    title: `${details.title} - travis.engineering`,
    authors: [{ name: "Travis Tang", url: "https://travis.engineering" }],
    description: details.summary,
    metadataBase: new URL("https://travis.engineering"),
    openGraph: {
      title: details.title,
      description: details.summary,
      type: "article",
      tags: details.tags,
      authors: "Travis Tang",
      publishedTime: new Date(details.createdAt).toUTCString(),
      siteName: "travis.engineering",
      url: "https://travis.engineering",
      images: details.coverImageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: details.title,
      description: details.summary,
      images: details.coverImageUrl,
    },
  };
}

export default async function ArticleViewPage({ params: { slug } }: Props) {
  const articleContent = await getArticle(slug);
  if (!articleContent) {
    redirect("/not-found");
  }

  return (
    <>
      <article className="content flex flex-col p-4 items-center gap-8 md:gap-16">
        <ArticleHeader article={articleContent} />
        <section className="cover-photo-wrapper rounded-lg w-full md:w-2/3 self-center overflow-hidden object-cover">
          <Image fill alt="cover photo" src={articleContent.coverImageUrl} />
        </section>
        <main id="main-content" className="w-full md:w-2/3 flex flex-col gap-8">
          <MDXRemote
            source={articleContent.content}
            components={{
              code,
              CodeWithFileName,
              MathEquation,
              PrerequisiteSection,
              ArticleImage,
              BlogImageContent: (props) => (
                <BlogImageContent
                  {...props}
                  rootPath={path.join("/blogs", ...slug)}
                />
              ),
            }}
          />
        </main>
      </article>
    </>
  );
}
