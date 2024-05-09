import { listArticles } from "@/services/articles";
import { BlogPostPreviewCard } from "../components/blog-post-preview-card";

export default async function BlogListPage() {
  const blogs = await listArticles();
  return (
    <div className="flex flex-col items-stretch gap-8 px-4">
      <h1>All blogs</h1>
      {blogs.map((blog) => (
        <BlogPostPreviewCard
          withDate
          imageClassName="rounded-lg"
          className="border-b-slate md:h-48"
          key={blog.slug.join("/")}
          article={blog}
        />
      ))}
    </div>
  );
}
