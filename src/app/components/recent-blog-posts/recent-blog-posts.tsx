import { ROUTE_BLOGS } from "@/constants/route";
import { listRecentArticles } from "@/services/articles";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BlogPostPreviewCard } from "../blog-post-preview-card";

export const RecentBlogPosts = async () => {
  const articles = await listRecentArticles(2);
  return (
    <section className="bg-white-dark dark:bg-slate-dark">
      <div className="md:shadow-lg -translate-y-0 md:-translate-y-1/2 md:rounded-lg p-4 md:p-8 flex flex-col gap-4 bg-white-darker dark:bg-slate-darker md:mx-16">
        <h4 className="text-slate-darker dark:text-slate-light">
          Recent Posts
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-transparent">
          {articles.map((article) => (
            <BlogPostPreviewCard
              key={article.title}
              article={article}
              className="md:h-48 rounded-lg"
            />
          ))}
        </div>
        <Link
          href={ROUTE_BLOGS}
          className="px-4 self-end bg-primary text-white dark:text-slate-dark dark:bg-primary p-2 rounded-lg flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300 hover:text-white"
        >
          View all <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};
