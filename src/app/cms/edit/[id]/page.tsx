import ArticleService from "@/services/articles";
import { redirect } from "next/navigation";
import CreateEditPage from "../../components/create-edit-page";

export default async function CMSEditPage({
  params,
}: {
  params: { id: string };
}) {
  const articleDetails = await new ArticleService().getArticleDetails(
    params.id
  );
  if (!articleDetails) {
    return redirect("/cms/not-found");
  }
  return (
    <CreateEditPage
      pageTitle={`Edit blog "${articleDetails.title}"`}
      articleId={params.id}
      initialDetails={articleDetails}
    />
  );
}
