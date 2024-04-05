import { ObjectId } from "mongodb";

export type ArticleMetadata = {
  _id: ObjectId;
  title: string;
  readableURLName: string;
  tags: string[];
  currentVersion: number;
  createdAt: number;
  modifiedAt: number;
  public: boolean;
  summary: string;
};

export type MetadataFormValue = {
  title: string;
  tags: string[];
  public: boolean;
  summary: string;
  readableURLName: string;
  currentVersion: number;
};

export const DEFAULT_METADATA_VALUE: MetadataFormValue = {
  title: "",
  tags: [],
  public: false,
  summary: "",
  readableURLName: "",
  currentVersion: 1,
};

export type MetadataUpdateProps = Partial<
  Omit<ArticleMetadata, "_id" | "createdAt" | "modifiedAt">
>;

export type MetadataSearchProps = Partial<{
  search: string;
  writtenAfter: number;
  writtenBefore: number;
  tag: string;
}>;
