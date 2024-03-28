import { ObjectId } from "mongodb";
import clientPromise from "./mongo";

export type ArticleMetadata = {
  _id: ObjectId;
  title: string;
  tags: string[];
  currentVersion: number;
  createdAt: number;
  modifiedAt: number;
  public: boolean;
};

export type MetadataUpdateProps = Partial<
  Omit<ArticleMetadata, "_id" | "createdAt" | "modifiedAt">
>;

export default class MetadataService {
  private async getArticleCollection() {
    const client = await clientPromise;
    const collections = client
      .db("articles")
      .collection<ArticleMetadata>("articles");
    return collections;
  }
  async getRegisteredTags() {
    const collection = await this.getArticleCollection();
    return collection.distinct("tags");
  }

  async getAllArticles() {
    const collection = await this.getArticleCollection();
    return collection.find().sort({ createdAt: "desc" }).toArray();
  }

  async update(id: string, updateProps: MetadataUpdateProps) {
    if (ObjectId.isValid(id)) return false;
    const collection = await this.getArticleCollection();
    return collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { ...updateProps, updatedAt: Date.now() }
    );
  }

  async get(id: string) {
    if (ObjectId.isValid(id)) return null;
    const collection = await this.getArticleCollection();
    return collection.findOne({ _id: new ObjectId(id) });
  }

  async create(props: MetadataUpdateProps = {}) {
    const collection = await this.getArticleCollection();
    const insertResult = await collection.insertOne({
      _id: new ObjectId(),
      title: "",
      tags: [],
      currentVersion: 1,
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      public: false,
      ...props,
    });
    return insertResult.insertedId;
  }
}
