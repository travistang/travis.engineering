import {
  FIELD_CURRENT_VERSION_FORM_NAME,
  FIELD_PUBLIC_FORM_NAME,
  FIELD_READABLE_URL_FORM_NAME,
  FIELD_SUMMARY_FORM_NAME,
  FIELD_TAGS_FORM_NAME,
  FIELD_TITLE_FORM_NAME,
  TAGS_FORM_UPLOAD_SEPARATOR,
} from "@/constants";
import { ArticleDetails } from "@/services/articles";
import {
  DEFAULT_METADATA_VALUE,
  MetadataFormValue,
} from "@/services/metadata/types";
import { useState } from "react";

const metadataFormFromInitialDetails = (details?: ArticleDetails) => {
  if (!details) return DEFAULT_METADATA_VALUE;
  return {
    title: details.title,
    tags: details.tags,
    public: details.public,
    summary: details.summary,
    readableURLName: details.readableURLName,
    currentVersion: details.currentVersion,
  };
};

export const useMetadataForm = (initialDetails?: ArticleDetails) => {
  const [form, setForm] = useState(
    metadataFormFromInitialDetails(initialDetails)
  );

  const updateForm = (value: Partial<MetadataFormValue>) => {
    setForm({ ...form, ...value });
  };

  return [form, updateForm] as const;
};

export const isMetadataValid = (metadata: MetadataFormValue) => {
  if (!metadata.title) return false;
};

export const formDataFromMetadataForm = (form: MetadataFormValue): FormData => {
  const formData = new FormData();
  formData.append(FIELD_PUBLIC_FORM_NAME, form.public.toString());
  formData.append(FIELD_TITLE_FORM_NAME, form.title);
  formData.append(FIELD_SUMMARY_FORM_NAME, form.summary);
  formData.append(FIELD_READABLE_URL_FORM_NAME, form.readableURLName);
  formData.append(
    FIELD_CURRENT_VERSION_FORM_NAME,
    form.currentVersion.toString()
  );
  const tagsValue = form.tags.join(TAGS_FORM_UPLOAD_SEPARATOR);
  formData.append(FIELD_TAGS_FORM_NAME, tagsValue);
  return formData;
};
