import FileStorage from "./file-storage";
import MetadataService from "./metadata";
import { ArticleMetadata, MetadataUpdateProps } from "./metadata/types";

export type ArticleDetails = ArticleMetadata & {
  content: string;
};

export type UpdateArticleProps = {
  metadata: MetadataUpdateProps;
  content: string;
};

export type ArticleSearchPayload = Partial<{
  searchString: string;
  writtenAfter: number;
  writtenBefore: number;
  tag: string;
}>;

export default class ArticleService {
  private metaService = new MetadataService();
  private fileStorage = new FileStorage();

  private async getFilesForArticle(articleId: string) {
    return this.fileStorage.listDir(this.getArticleTextsPath(articleId));
  }

  private async getArticleContent(articleId: string, version = 1) {
    const files = await this.getFilesForArticle(articleId);
    if (!files.length) return null;
    const url = files[0].url;
    const response = await fetch(url, { cache: "no-cache" });
    return response.text();
  }

  private getMediaPath(articleId: string) {
    return `articles/${articleId}/media`;
  }

  private getArticleTextsPath(articleId: string) {
    return `articles/${articleId}/texts`;
  }

  private async getEmptyArticles(): Promise<string[]> {
    const allArticles = await this.metaService.getAllArticles();
    return allArticles
      .filter((meta) => !meta.title)
      .map((meta) => meta._id.toHexString());
  }

  private async saveTextForArticle(
    articleId: string,
    content: string,
    version = 1
  ) {
    const file = new File([content], `v${version}.txt`, {
      type: "text/plain",
    });
    return this.fileStorage.create(this.getArticleTextsPath(articleId), file);
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
    const { metadata, content } = props;

    if (metadata) {
      await this.metaService.update(id, metadata);
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

  async getArticleDetailsByReadableUrlName(
    name: string
  ): Promise<ArticleDetails | null> {
    const meta = await this.metaService.getArticleByReadableURLName(name);
    if (!meta) return null;
    const content = await this.getArticleContent(meta._id.toHexString());
    if (content === null) return null;
    return {
      ...meta,
      content,
    };
  }

  async getArticleDetails(id: string): Promise<ArticleDetails | null> {
    const meta = await this.metaService.get(id);
    if (!meta) return null;
    const content = await this.getArticleContent(id);
    if (content === null) return null;
    return {
      ...meta,
      content,
    };
  }

  async searchTags(searchString: string): Promise<string[]> {
    return (await this.metaService.getRegisteredTags()).filter((tag) =>
      tag.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  async deleteArticle(id: string): Promise<boolean> {
    const meta = await this.metaService.get(id);
    if (!meta) return false;
    const metaDeleted = await this.metaService.delete(id);
    if (!metaDeleted) return false;
    const files = await this.getFilesForArticle(id);
    await Promise.all(files.map((file) => this.fileStorage.delete(file.url)));
    return true;
  }

  async searchArticles(
    searchPayload: ArticleSearchPayload
  ): Promise<ArticleMetadata[]> {
    return this.metaService.search(searchPayload);
  }
}
