import mongoose from "mongoose";

export const articleSchema = new mongoose.Schema({
  name: String,
  title: String,
  createdAt: Number,
  modifiedAt: { type: Number, default: Date.now(), nullable: true },
  public: { type: Boolean, default: false },
  tags: { type: [String], default: [] },
  currentVersion: { type: Number, default: 1 },
});

export type ArticleMetadata = {
  name: string;
  title: string;
  createdAt: number;
  modifiedAt?: number;
  public: boolean;
  tags: string[];
  currentVersion: number;
};

export const articleCollectionName = "Articles";

export default mongoose.models.articleSchema ||
  mongoose.model(articleCollectionName, articleSchema);
