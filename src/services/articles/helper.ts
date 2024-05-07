import fs from "fs";

export const getAllArticlePaths = (rootPath: string): string[] => {
  const files = fs.readdirSync(rootPath, { recursive: true });
  return files
    .map((path) => path.toString())
    .filter((file) => file.endsWith("meta.json"))
    .map((filePath) => filePath.replace("meta.json", ""));
};
