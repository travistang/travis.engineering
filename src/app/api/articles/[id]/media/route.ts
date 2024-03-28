import { getUploadedFile } from "@/app/api/_utils";
import ArticleService from "@/services/articles";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const metadata = await new ArticleService().listMedia(id);
  return NextResponse.json(metadata);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const file = await getUploadedFile(request);
  if (!file) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }
  const metadata = await new ArticleService().addMedia(id, file);
  return NextResponse.json(metadata);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const fileName = request.nextUrl.searchParams.get("fileName");
  if (!fileName) {
    return NextResponse.json({ error: "Missing file name" }, { status: 400 });
  }
  const deleted = await new ArticleService().removeMedia(id, fileName);
  return NextResponse.json({ deleted });
}
