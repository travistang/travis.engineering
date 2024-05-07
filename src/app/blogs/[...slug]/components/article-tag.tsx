import { ROUTE_BLOGS_BY_TAG } from "@/constants/route";
import Link from "next/link";

type Props = {
  tag: string;
};
export const ArticleTag = ({ tag }: Props) => {
  return (
    <Link href={`${ROUTE_BLOGS_BY_TAG}/${tag}`}>
      <span className="text-xs text-gray-500 bg-gray-100 rounded-md px-2 py-1">
        {tag}
      </span>
    </Link>
  );
};
