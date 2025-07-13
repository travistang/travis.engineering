import { listArticles } from "@/services/articles";
import { BlogPostPreviewCard } from "../components/blog-post-preview-card";

export default async function BlogListPage() {
  const blogs = await listArticles();
  return (
    <div className="content flex flex-col items-stretch gap-8 px-4">
      <h1>All blogs</h1>
      {blogs.map((blog) => (
        <BlogPostPreviewCard
          className="border-b-slate"
          key={blog.slug.join("/")}
          article={blog}
        />
      ))}
    </div>
  );
}
