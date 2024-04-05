import { ROUTE_ABOUT, ROUTE_ARTICLES } from "@/constants/route";

export default function PublicArticleHeader() {
  return (
    <nav className="flex items-center gap-2 sticky top-0 w-full z-20 shadow-lg lg:shadow-none h-16 p-4">
      <span className="font-mono">
        travis.<b className="text-primary font-bold">engineering</b>
      </span>
      <ul>
        <li>
          <a href={ROUTE_ABOUT}>About</a>
        </li>
        <li>
          <a href={ROUTE_ARTICLES}>Blogs</a>
        </li>
      </ul>
    </nav>
  );
}
