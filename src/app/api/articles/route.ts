import ArticleService from "@/services/articles";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await new ArticleService().searchArticles({}));
}
