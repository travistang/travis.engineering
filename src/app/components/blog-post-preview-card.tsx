import { ROUTE_BLOGS } from "@/constants/route";
import { ArticleDetails } from "@/services/articles";
import classNames from "classnames";
import { format } from "date-fns";
import Link from "next/link";
import { BlogCategory } from "./blog-category";

type PreviewVariant = "card" | "row";
type Props = {
  className?: string;
  article: ArticleDetails;
};
export const BlogPostPreviewCard = ({
  className,
  article,
}: Props) => {
  return (
    <Link href={`${ROUTE_BLOGS}/${article.slug.join("/")}`}>
      <div
        className={classNames(
          "flex items-stretch gap-2 overflow-hidden w-full flex-row h-36",
          className
        )}
      >
        <div className="p-2 flex flex-col overflow-hidden flex-shrink-0 max-w-full">
          <BlogCategory category={article.category} />
          <span className="font-bold text-lg md:text-xl">{article.title}</span>
          <h6 className="opacity-75 text-sm italic py-1">
            {format(new Date(article.createdAt), "yyyy-MM-dd")}
          </h6>
          <p className="text-sm md:text-md line-clamp-2 md:line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>
    </Link>
  );
};
