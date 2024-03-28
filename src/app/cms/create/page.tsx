import ArticleService from "@/services/articles";
import CreateEditPage from "../components/create-edit-page";

export default async function CMSCreatePage() {
  const articleId = await new ArticleService().createDraft();
  if (!articleId) {
    return null;
  }
  return <CreateEditPage articleId={articleId} pageTitle="Create a blog" />;
}
