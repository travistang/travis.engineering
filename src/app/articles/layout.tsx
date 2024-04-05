import { Metadata } from "next";
import Head from "next/head";
import PublicArticleHeader from "./components/public-article-header";

export const metadata: Metadata = {
  icons: [],
  openGraph: {
    type: "website",
    title: "Travis Tang's blog",
    siteName: "TOP Blog",
    description:
      "A blog created and maintained by Travis Tang, a full stack engineer specialized in React.js, TypeScript and Node.js, that records his thoughts and ideas about wide range of topics. Including software engineering, IoT, to hiking and music.",
  },
  title: "Welcome to Travis' blog!",
  description: "Welcome to TOP Blog, one of Travis' Over-engineered projects",
};

export default function ArticlePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover"></meta>
      </Head>
      <PublicArticleHeader />
      <div className="flex flex-col items-stretch gap-2 flex-1">{children}</div>
    </>
  );
}
