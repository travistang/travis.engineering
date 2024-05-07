import { ROUTE_BLOGS } from "@/constants/route";
import { ArticleDetails } from "@/services/articles";
import classNames from "classnames";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BlogCategory } from "./blog-category";

type Props = {
  withDate?: boolean;
  className?: string;
  imageClassName?: string;
  article: ArticleDetails;
};
export const BlogPostPreviewCard = ({
  withDate,
  imageClassName,
  className,
  article,
}: Props) => {
  return (
    <Link href={`${ROUTE_BLOGS}/${article.slug.join("/")}`}>
      <div
        className={classNames(
          "flex items-stretch gap-2 overflow-hidden",
          className
        )}
      >
        <div
          className={classNames(
            "aspect-square max-w-1/3 flex-shrink-0 h-full overflow-hidden",
            imageClassName
          )}
        >
          <div className="relative w-full h-full">
            <Image
              objectFit="cover"
              layout="fill"
              src={article.coverImageUrl}
              alt={article.title}
            />
          </div>
        </div>
        <div className="p-2 flex flex-col overflow-hidden">
          <BlogCategory category={article.category} />
          <span className="font-bold text-lg md:text-xl">{article.title}</span>
          {withDate && (
            <h6 className="opacity-75 text-sm italic py-1">
              {format(new Date(article.createdAt), "yyyy-MM-dd")}
            </h6>
          )}
          <p className="line-clamp-3">{article.summary}</p>
          {!withDate && (
            <span className="italic text-sm hover:underline justify-self-end">
              Read more...
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
