import FileStorage from "@/services/file-storage";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await new FileStorage().listDir());
}
