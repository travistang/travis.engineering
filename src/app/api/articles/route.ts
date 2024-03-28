import ArticleService from "@/services/articles";
import MetadataService from "@/services/metadata";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const article = form.get("article") as unknown as string;
  const articleName = form.get("title") as unknown as string;
  if (typeof article !== "string" || typeof articleName !== "string") {
    return NextResponse.json(
      { error: "Missing or malformed data" },
      { status: 400 }
    );
  }

  try {
    const articleId = await new ArticleService().createDraft();
    return NextResponse.json({ articleId });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(await new MetadataService().getAllArticles());
}
