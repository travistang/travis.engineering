import {
  FIELD_ARTICLE_FORM_NAME,
  FIELD_CURRENT_VERSION_FORM_NAME,
  FIELD_PUBLIC_FORM_NAME,
  FIELD_READABLE_URL_FORM_NAME,
  FIELD_SUMMARY_FORM_NAME,
  FIELD_TAGS_FORM_NAME,
  FIELD_TITLE_FORM_NAME,
  TAGS_FORM_UPLOAD_SEPARATOR,
} from "@/constants";
import { format } from "date-fns";
import { ArticleMetadata, MetadataUpdateProps } from "./types";

export const generateReadableURLName = (createdAt: number, title: string) => {
  const sanitizedTitle = (title || "untitled").replace(" ", "-");
  return `${format(createdAt, "yyyy-MM-dd")}-${encodeURIComponent(
    sanitizedTitle
  )}`;
};
export const computeReadableURLName = (
  metadata: ArticleMetadata,
  updateProps: MetadataUpdateProps
): string => {
  const originalURL = metadata.readableURLName;
  const updatedURL = updateProps.readableURLName;
  console.log({ originalURL, updatedURL });
  if (!originalURL || !updatedURL) {
    const usingTitle = updateProps.title || metadata.title;
    const createdAt = metadata.createdAt;
    return generateReadableURLName(createdAt, usingTitle);
  }
  return updatedURL || originalURL;
};

export const getMetadataUpdatePropsFromFormData = (
  form: FormData
): MetadataUpdateProps & { articles: string } => {
  const title = form.get(FIELD_TITLE_FORM_NAME) as unknown as string;
  const summary = form.get(FIELD_SUMMARY_FORM_NAME) as unknown as string;
  const readableURLName = form.get(
    FIELD_READABLE_URL_FORM_NAME
  ) as unknown as string;
  const isPublic =
    (form.get(FIELD_PUBLIC_FORM_NAME) as unknown as string) === "true";
  const tags = (form.get(FIELD_TAGS_FORM_NAME) as unknown as string)
    ?.split(TAGS_FORM_UPLOAD_SEPARATOR)
    .filter(Boolean);
  const currentVersion = +(form.get(
    FIELD_CURRENT_VERSION_FORM_NAME
  ) as unknown as string);
  const articles = form.get(FIELD_ARTICLE_FORM_NAME) as unknown as string;

  return {
    title,
    public: isPublic,
    summary,
    readableURLName,
    tags,
    currentVersion: Number.isFinite(currentVersion)
      ? currentVersion
      : undefined,
    articles,
  };
};
