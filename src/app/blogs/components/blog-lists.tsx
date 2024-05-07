import { BlogPostPreviewCard } from "@/app/components/blog-post-preview-card";
import { ArticleDetails } from "@/services/articles";
import React from "react";

type Props = {
  children: React.ReactNode;
  blogs: ArticleDetails[];
};
export const BlogLists = ({ children, blogs }: Props) => {
  return (
    <div className="flex flex-col p-4 items-stretch gap-8 md:gap-16">
      {children}
      {blogs.map((blog) => (
        <BlogPostPreviewCard
          withDate
          imageClassName="rounded-lg"
          className="border-b-slate h-36 md:h-48"
          key={blog.slug.join("/")}
          article={blog}
        />
      ))}
    </div>
  );
};
