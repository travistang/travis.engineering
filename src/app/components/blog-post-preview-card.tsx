import { ROUTE_BLOGS } from "@/constants/route";
import { ArticleDetails } from "@/services/articles";
import classNames from "classnames";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BlogCategory } from "./blog-category";

type PreviewVariant = "card" | "row";
type Props = {
  variant?: PreviewVariant;
  className?: string;
  imageClassName?: string;
  article: ArticleDetails;
};
export const BlogPostPreviewCard = ({
  variant = "card",
  imageClassName,
  className,
  article,
}: Props) => {
  return (
    <Link href={`${ROUTE_BLOGS}/${article.slug.join("/")}`}>
      <div
        className={classNames(
          "flex items-stretch gap-2 overflow-hidden",
          variant === "row" ? "w-full flex-row h-36" : "flex-col",
          className
        )}
      >
        <div
          className={classNames(
            "overflow-hidden",
            variant === "row"
              ? "aspect-square h-full w-auto hidden md:block flex-shrink-0"
              : "h-36 md:h-48 w-auto flex-shrink-0",
            imageClassName
          )}
        >
          <div className="relative w-full h-full">
            <Image
              height={240}
              width={240}
              className="absolute inset-0 w-full h-full object-cover"
              src={article.coverImageUrl}
              alt={article.title}
            />
          </div>
        </div>
        <div className="p-2 flex flex-col overflow-hidden flex-shrink-0 max-w-full">
          <BlogCategory category={article.category} />
          <span className="font-bold text-lg md:text-xl">{article.title}</span>
          {variant === "row" && (
            <h6 className="opacity-75 text-sm italic py-1">
              {format(new Date(article.createdAt), "yyyy-MM-dd")}
            </h6>
          )}
          <p className="text-sm md:text-md line-clamp-2 md:line-clamp-3">
            {article.summary}
          </p>
          {variant === "card" && (
            <span className="italic text-sm hover:underline justify-self-end">
              Read more...
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
