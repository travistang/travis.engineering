import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import { getAllArticlePaths } from "./helper";

export type ArticleMetadata = {
  title: string;
  readableURLName: string;
  category: string;
  tags: string[];
  currentVersion: number;
  createdAt: number;
  modifiedAt: number;
  public: boolean;
  summary: string;
};

export type ArticleDetails = ArticleMetadata & {
  content: string;
  slug: string[];
  coverImageUrl: string;
  readingTimeText?: string;
};

export type ArticleSearchPayload = Partial<{
  searchString: string;
  writtenAfter: number;
  writtenBefore: number;
  tag: string;
}>;

export const ARTICLE_DIRECTORY = path.join(process.cwd(), "_blogs");
const REQUIRED_FILES = {
  metadataFileName: "meta.json",
  contentFileName: "blog.mdx",
  coverPhotoFileName: "cover.png",
};

export const listArticles = async (): Promise<ArticleDetails[]> => {
  const articlePaths = getAllArticlePaths(ARTICLE_DIRECTORY);
  return Promise.all(
    articlePaths.map((filePath) => getArticle(filePath.split("/")))
  )
    .then(
      (articles) =>
        articles.filter((article) => article !== null) as ArticleDetails[]
    )
    .then((articles) =>
      articles.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    );
};

export const getArticlesByCategory = async (category: string) => {
  return listArticles().then((articles) =>
    articles.filter(
      (article) =>
        article.category.toLocaleLowerCase() === category.toLocaleLowerCase()
    )
  );
};

export const getArticlesByTag = async (tag: string) => {
  return listArticles().then((articles) =>
    articles.filter((article) =>
      article.tags.find(
        (articleTag) => articleTag.toLowerCase() === tag.toLowerCase()
      )
    )
  );
};

export const listArticleCategories = async () => {
  return listArticles().then((articles) =>
    Array.from(new Set(articles.map((article) => article.category)))
  );
};

export const listArticleTags = async () => {
  return listArticles().then((articles) =>
    Array.from(new Set(articles.flatMap((article) => article.tags)))
  );
};

export const getArticle = async (
  paths: string[]
): Promise<ArticleDetails | null> => {
  const articlePath = path.join(
    ARTICLE_DIRECTORY,
    ...paths,
    REQUIRED_FILES.contentFileName
  );
  const metaPath = path.join(
    ARTICLE_DIRECTORY,
    ...paths,
    REQUIRED_FILES.metadataFileName
  );
  if (!fs.existsSync(articlePath) || !fs.existsSync(metaPath)) {
    return null;
  }
  const content = fs.readFileSync(articlePath, "utf8");
  const readingTimeStats = readingTime(content);
  const metadata = JSON.parse(
    fs.readFileSync(metaPath, "utf8")
  ) as ArticleMetadata;

  return {
    ...metadata,
    slug: paths,
    coverImageUrl: path.join(
      "/blogs",
      ...paths,
      REQUIRED_FILES.coverPhotoFileName
    ),
    readingTimeText: readingTimeStats.text,
    createdAt: new Date(metadata.createdAt).getTime(),
    content,
  };
};

export const listRecentArticles = async (
  limit = 5
): Promise<ArticleDetails[]> => {
  return listArticles().then((articles) => articles.slice(0, limit));
};
