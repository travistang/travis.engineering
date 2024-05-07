import { getArticlesByTag, listArticleTags } from "@/services/articles";
import { BlogLists } from "../../components/blog-lists";

export async function generateStaticParams() {
  const allTags = await listArticleTags();
  return allTags.map((tag) => ({ tag }));
}

export default async function BlogsByTagPage({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const blogs = await getArticlesByTag(tag);
  return (
    <BlogLists blogs={blogs}>
      <div className="flex flex-col gap-2 items-stretch">
        Blogs with tag
        <b>
          <i>{tag}</i>
        </b>
      </div>
    </BlogLists>
  );
}
