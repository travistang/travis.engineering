import FileStorage from "./file-storage";
import MetadataService from "./metadata";

export type ArticlePreview = {
  id: string;
  title: string;
  tags: string[];
  writtenAt: number;
  previewContent: string;
};

export type ArticleDetails = {
  title: string;
  writtenAt: number;
  tags: string[];
  content: string;
  currentVersion: number;
  public: boolean;
};

export type UpdateArticleProps = {
  title: string;
  tags: string[];
  content: string;
};
export default class ArticleService {
  private metaService = new MetadataService();
  private fileStorage = new FileStorage();

  private async getArticleContent(articleId: string, version = 1) {
    const files = await this.fileStorage.listDir(`articles/${articleId}`);
    if (!files.length) return null;
    const url = files[0].url;
    const response = await fetch(url);
    return response.text();
  }

  private getMediaPath(articleId: string) {
    return `articles/${articleId}/media`;
  }

  private getArticleTextsPath(articleId: string) {
    return `articles/${articleId}/texts`;
  }

  private getArticleIdFromPath(path: string) {
    const matchResult = path.match(/^articles\/(.+)\//)?.[0];
    return matchResult?.[1];
  }

  private async getEmptyArticles(): Promise<string[]> {
    const articlesList = await this.fileStorage.listDir("articles");
    const emptyV1Articles = articlesList.filter(
      (meta) => meta.name.endsWith("v1.txt") && meta.size === 0
    );
    return emptyV1Articles
      .map((meta) => this.getArticleIdFromPath(meta.name)!)
      .filter(Boolean);
  }

  private async saveTextForArticle(
    articleId: string,
    content: string,
    version = 1
  ) {
    const file = new File([content], `v${version}.txt`, {
      type: "text/plain",
    });
    await this.fileStorage.create(this.getArticleTextsPath(articleId), file);
  }

  async createDraft(): Promise<string> {
    // First reuse empty articles instead of creating draft
    const emptyArticles = await this.getEmptyArticles();
    if (emptyArticles.length) return emptyArticles[0];

    // If there isn't any empty articles then start creating one
    const articleId = await this.metaService.create();
    if (!articleId) throw new Error("Failed to create draft");
    const id = articleId.toHexString();
    await this.saveTextForArticle(id, "");
    return id;
  }

  async updateArticle(id: string, props: Partial<UpdateArticleProps>) {
    const { title, tags, content } = props;
    if (title || tags) {
      await this.metaService.update(id, {
        title,
        tags,
      });
    }

    if (content) {
      await this.saveTextForArticle(id, content);
    }
    return true;
  }

  async addMedia(id: string, file: File) {
    const metadata = await this.fileStorage.create(this.getMediaPath(id), file);
    return metadata;
  }

  async listMedia(id: string) {
    return this.fileStorage.listDir(this.getMediaPath(id));
  }

  async removeMedia(id: string, fileName: string) {
    const filePath = this.getMediaPath(id) + "/" + fileName;
    const searchResult = await this.fileStorage.listDir(filePath);
    if (!searchResult.length) return false;
    return this.fileStorage.delete(searchResult[0].url);
  }

  async getArticleDetails(id: string): Promise<ArticleDetails | null> {
    const meta = await this.metaService.get(id);
    if (!meta) return null;
    const content = await this.getArticleContent(id);
    if (content === null) return null;

    return {
      ...meta,
      writtenAt: meta.modifiedAt ?? meta.createdAt,
      content,
    };
  }

  async searchTags(searchString: string): Promise<string[]> {
    return (await this.metaService.getRegisteredTags()).filter((tag) =>
      tag.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
