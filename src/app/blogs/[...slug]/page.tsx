import { getArticle, listArticles } from "@/services/articles";

import { Metadata } from "next";
import Image from "next/image";

import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import path from "path";
import "./article.css";
import code from "./components/article-code-block";
import { ArticleHeader } from "./components/article-header";
import { BlogImageContent } from "./components/blog-image-content";

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
  };
}

export default async function ArticleViewPage({ params: { slug } }: Props) {
  const articleContent = await getArticle(slug);
  if (!articleContent) {
    redirect("/not-found");
  }

  return (
    <article className="flex flex-col p-4 items-center gap-8 md:gap-16">
      <ArticleHeader article={articleContent} />
      <section className="cover-photo-wrapper rounded-lg w-full md:w-2/3 self-center overflow-hidden object-cover">
        <Image fill alt="cover photo" src={articleContent.coverImageUrl} />
      </section>
      <main id="main-content" className="w-full md:w-2/3 gap-2">
        <MDXRemote
          source={articleContent.content}
          components={{
            code,
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
  );
}
