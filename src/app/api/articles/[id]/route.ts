import ArticleService from "@/services/articles";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const form = await request.formData();
  const article = form.get("article") as unknown as string;
  const articleName = form.get("title") as unknown as string;
  if (typeof article !== "string" || typeof articleName !== "string") {
    return NextResponse.json(
      { error: "Missing or malformed data" },
      { status: 400 }
    );
  }

  await new ArticleService().updateArticle(id, {
    title: articleName,
    content: article,
  });
  return NextResponse.json({ updated: true });
}

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const details = await new ArticleService().getArticleDetails(id);
  if (!details) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(details);
}
