import { NextRequest } from "next/server";

export const getUploadedFile = async (request: NextRequest) => {
  const form = await request.formData();
  const uploadedFile = form.get("file") as unknown as File;
  if (typeof uploadedFile === "string") return null;
  return uploadedFile;
};
