import ArticleService from "@/services/articles";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  if (!query) {
    return NextResponse.json(
      { error: "Missing search string" },
      { status: 400 }
    );
  }
  return NextResponse.json(await new ArticleService().searchTags(query));
}
