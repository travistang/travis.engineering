import { Metadata } from "next";
import { HeaderLayout } from "../components/header-layout/header-layout";

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
  return <HeaderLayout>{children}</HeaderLayout>;
}
