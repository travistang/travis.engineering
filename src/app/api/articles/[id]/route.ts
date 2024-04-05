import ArticleService from "@/services/articles";
import { getMetadataUpdatePropsFromFormData } from "@/services/metadata/helper";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const form = await request.formData();
  const uploadedData = getMetadataUpdatePropsFromFormData(form);
  const { articles, ...metadata } = uploadedData;
  if (typeof articles !== "string" || typeof metadata.title !== "string") {
    return NextResponse.json(
      { error: "Missing or malformed data" },
      { status: 400 }
    );
  }
  await new ArticleService().updateArticle(id, {
    metadata,
    content: articles,
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

export async function DELETE(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const deleted = await new ArticleService().deleteArticle(id);
  return NextResponse.json({ deleted }, { status: deleted ? 200 : 500 });
}
