import { del, head, list, put } from "@vercel/blob";

export type FileMetadata = {
  url: string;
  contentType: string;
  size: number;
  name: string;
};

export default class FileStorage {
  async delete(fileName: string): Promise<boolean> {
    try {
      await del(fileName);
      return true;
    } catch {
      return false;
    }
  }
  async listDir(dirName = ""): Promise<FileMetadata[]> {
    const metadataList = await list<"folded">({ prefix: dirName || undefined });
    const blobsInDir = metadataList.blobs.filter((blob) =>
      blob.pathname.startsWith(dirName)
    );
    return Promise.all(blobsInDir.map((blob) => this.get(blob.url))).then(
      (meta) => meta.filter((m) => !!m)
    ) as Promise<FileMetadata[]>;
  }

  async create(
    requestFilePath: string,
    file: File
  ): Promise<FileMetadata | null> {
    const name = file.name;
    const path = `${requestFilePath}/${name}`;
    const metadata = await put(path, file, {
      access: "public",
      addRandomSuffix: false,
    });
    if (!metadata.url) {
      return null;
    }
    return this.get(metadata.url);
  }

  async get(requestFilePath: string): Promise<FileMetadata | null> {
    try {
      const metadata = await head(requestFilePath);
      if (!metadata.url) {
        return null;
      }
      return {
        url: metadata.downloadUrl,
        contentType: metadata.contentType,
        name: metadata.pathname.split("/").at(-1) ?? "",
        size: metadata.size,
      };
    } catch (e) {
      return null;
    }
  }
}
