import { ArticleDetails } from "@/services/articles";
import { useState } from "react";

export type MetadataFormValue = {
  title: string;
  tags: string[];
  public: boolean;
  currentVersion: number;
};

export const DEFAULT_METADATA_VALUE: MetadataFormValue = {
  title: "",
  tags: [],
  public: false,
  currentVersion: 1,
};

const metadataFormFromInitialDetails = (details?: ArticleDetails) => {
  if (!details) return DEFAULT_METADATA_VALUE;
  return {
    title: details.title,
    tags: details.tags,
    public: details.public,
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
  formData.append("public", form.public.toString());
  formData.append("title", form.title);
  formData.append("currentVersion", form.currentVersion.toString());
  form.tags.forEach((tag) => {
    formData.append("tags", tag);
  });
  return formData;
};
