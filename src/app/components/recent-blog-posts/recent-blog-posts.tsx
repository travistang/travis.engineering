import { ROUTE_BLOGS } from "@/constants/route";
import { listRecentArticles } from "@/services/articles";
import Link from "next/link";
import { BlogPostPreviewCard } from "../blog-post-preview-card";

export const RecentBlogPosts = async () => {
  const articles = await listRecentArticles(2);
  return (
    <section className="bg-white-dark dark:bg-slate-dark">
      <div className=" md:shadow -translate-y-0 md:-translate-y-36 md:rounded-lg p-4 md:p-8 flex flex-col gap-8 bg-white-dark dark:bg-slate-dark md:mx-16">
        <h4 className="text-slate-darker dark:text-slate-light">
          Recent Posts
        </h4>
        <div className="flex flex-col items-stretch gap-4 bg-transparent">
          {articles.map((article) => (
            <BlogPostPreviewCard
              key={article.title}
              article={article}
              className="md:h-full rounded-lg"
            />
          ))}
        </div>
        <Link
          href={ROUTE_BLOGS}
          className="px-4 self-end text-primary flex items-center hover:underline hover:text-primary-dark"
        >
          See more...
        </Link>
      </div>
    </section>
  );
};
