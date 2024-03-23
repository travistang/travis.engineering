import FileStorage from "@/services/file-storage";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestFilePath = request.nextUrl.pathname.replace(
    /^\/api\/files\//,
    ""
  );
  const metadata = await new FileStorage().listDir(requestFilePath);
  return NextResponse.json(metadata);
}

export async function PUT(
  request: NextRequest,
  { params: { path } }: { params: { path: string[] } }
) {
  const requestFilePath = path.join("/");
  const form = await request.formData();
  const file = form.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }
  const metadata = await new FileStorage().create(requestFilePath, file);
  if (!metadata) {
    return NextResponse.json(
      { error: "Failed to create file" },
      { status: 500 }
    );
  }
  return NextResponse.json(metadata, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const fileName = request.nextUrl.searchParams.get("path");
  if (!fileName) {
    return NextResponse.json({ error: "Missing filename" }, { status: 400 });
  }
  return NextResponse.json({
    deleted: await new FileStorage().delete(fileName),
  });
}
