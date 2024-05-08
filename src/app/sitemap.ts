import { getSitemapEntries } from "@/services/sitemap";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return await getSitemapEntries();
}
