import { BlogCategory } from "@/app/components/blog-category";
import { ArticleDetails } from "@/services/articles";
import { getSocialMediaLink } from "@/services/sharing";
import { format } from "date-fns";
import { ArticleTag } from "./article-tag";
import { SocialSharingOptions } from "./social-sharing-options";

export const ArticleHeader = ({ article }: { article: ArticleDetails }) => {
  return (
    <header className="flex flex-col w-full md:w-2/3 items-stretch overflow-y-visible">
      <h1>{article.title}</h1>
      <div className="flex items-center justify-between gap-2">
        <BlogCategory category={article.category} className="pt-2 text-sm" />
        <SocialSharingOptions
          blogPath={getSocialMediaLink("link", article.slug.join("/"))}
          className="pt-2"
        />
      </div>
      {article.summary && (
        <p className="italic text-justify text-slate dark:text-white-dark py-4 md:py-8">
          {article.summary}
        </p>
      )}
      <div className="flex flex-col md:flex-row gap-2 justify-between pb-2">
        <span className="flex gap-2">
          {format(article.createdAt, "dd/MM/yyyy")}
          {article.readingTimeText && <> • {article.readingTimeText}</>}
        </span>
        {article.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <ArticleTag tag={tag} key={tag} />
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};
