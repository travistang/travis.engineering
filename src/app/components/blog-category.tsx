import { ROUTE_BLOGS_BY_CATEGORY } from "@/constants/route";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  className?: string;
  category: string;
};

const CATEGORY_COLORS = {
  development: "text-primary",
  sports: "text-accent",
  DIY: "text-accent-yellow",
  DEFAULT: "text-slate dark:text-white-darker",
};

export const BlogCategory = ({ className, category }: Props) => {
  return (
    <Link href={`${ROUTE_BLOGS_BY_CATEGORY}/${encodeURIComponent(category)}`}>
      <span
        tabIndex={-1}
        className={classNames(
          "font-bold uppercase",
          className,
          CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] ??
            CATEGORY_COLORS.DEFAULT
        )}
      >
        {category}
      </span>
    </Link>
  );
};
