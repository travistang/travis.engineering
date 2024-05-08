import { BlogCategory } from "@/app/components/blog-category";
import {
  getArticlesByCategory,
  listArticleCategories,
} from "@/services/articles";
import { BlogLists } from "../../components/blog-lists";

export async function generateStaticParams() {
  const allCategories = await listArticleCategories();
  return allCategories.map((category) => ({ category }));
}

export default async function CategoryPage({
  params: { category: urlCategory },
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent(urlCategory);
  const articles = await getArticlesByCategory(category);
  return (
    <BlogLists blogs={articles}>
      <div className="flex flex-col gap-2 items-stretch">
        Blogs with category
        <BlogCategory className="text-3xl" category={category} />
      </div>
    </BlogLists>
  );
}
