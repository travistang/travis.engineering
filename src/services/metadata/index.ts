import { Filter, ObjectId, WithId } from "mongodb";
import clientPromise from "../mongo";
import { computeReadableURLName, generateReadableURLName } from "./helper";
import {
  ArticleMetadata,
  MetadataSearchProps,
  MetadataUpdateProps,
} from "./types";

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
    return collection
      .find({ title: { $ne: "" } })
      .sort({ createdAt: "desc" })
      .toArray();
  }

  async update(id: string, updateProps: MetadataUpdateProps) {
    if (!ObjectId.isValid(id)) return false;
    const originalMetadata = await this.get(id);
    if (!originalMetadata) return false;
    const collection = await this.getArticleCollection();
    return collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateProps,
          readableURLName: computeReadableURLName(
            originalMetadata,
            updateProps
          ),
          updatedAt: Date.now(),
        },
      }
    );
  }

  async get(id: string) {
    if (!ObjectId.isValid(id)) return null;
    const collection = await this.getArticleCollection();
    return collection.findOne({ _id: new ObjectId(id) });
  }

  async delete(id: string) {
    if (!ObjectId.isValid(id)) return false;
    const collection = await this.getArticleCollection();
    return collection.findOneAndDelete({ _id: new ObjectId(id) });
  }

  async create(props: MetadataUpdateProps = {}) {
    const collection = await this.getArticleCollection();
    const now = Date.now();
    const insertResult = await collection.insertOne({
      _id: new ObjectId(),
      title: "",
      readableURLName: generateReadableURLName(now, props.title ?? ""),
      summary: "",
      tags: [],
      currentVersion: 1,
      createdAt: now,
      modifiedAt: now,
      public: false,
      ...props,
    });
    return insertResult.insertedId;
  }

  async getArticleByReadableURLName(name: string) {
    const collection = await this.getArticleCollection();
    return collection.findOne({ readableURLName: name });
  }

  async search(searchPayload: MetadataSearchProps): Promise<ArticleMetadata[]> {
    const collection = await this.getArticleCollection();
    const conditions: Filter<WithId<ArticleMetadata>>[] = [
      { title: { $ne: "" } },
    ];
    if (searchPayload.search) {
      conditions.push({
        title: {
          $regex: new RegExp(
            `/^.*${searchPayload.search.toLowerCase()}.*$/`,
            "i"
          ),
        },
      });
    }

    if (searchPayload.writtenAfter) {
      conditions.push({
        createdAt: { $gte: searchPayload.writtenAfter },
      });
    }

    if (searchPayload.writtenBefore) {
      conditions.push({
        createdAt: { $lte: searchPayload.writtenBefore },
      });
    }
    if (searchPayload.tag) {
      conditions.push({
        tags: { $elemMatch: { $regex: searchPayload.writtenBefore } },
      });
    }

    return collection
      .find({ $and: conditions })
      .sort({ createdAt: "desc" })
      .toArray();
  }
}
