import { FileMetadata } from "@/services/file-storage";
import { useMemo } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

type UseMediaCRUDResponse = {
  media: FileMetadata[];
  isLoading?: boolean;
  isUploading?: boolean;
  uploadMedia: (file: File) => Promise<void>;
  deleteMedia: (url: string) => Promise<boolean>;
};

const mediaUploader = async (url: string, { arg }: { arg: File }) => {
  const formData = new FormData();
  formData.append("file", arg);
  const response = await fetch(url, {
    method: "PUT",
    body: formData,
  });
  return response.json();
};

const mediaFetcher = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) return null;
  return response.json() as Promise<FileMetadata[]>;
};

const mediaRemover = async (url: string, { arg: fileUrl }: { arg: string }) => {
  const response = await fetch(
    `${url}?fileName=${encodeURIComponent(fileUrl)}`,
    {
      method: "DELETE",
    }
  );
  const data = (await response.json()) as { deleted: boolean };
  if (!data?.deleted) {
    throw new Error("Failed to delete file");
  }
  return true;
};

export default function useMediaCrud(articleId: string): UseMediaCRUDResponse {
  const url = useMemo(() => `/api/articles/${articleId}/media`, [articleId]);
  const { data: media, isLoading } = useSWR(url, mediaFetcher);
  const { trigger: deleteMedia } = useSWRMutation(url, mediaRemover, {
    onSuccess: () => toast.success("File removed"),
    onError: () => toast.error("Failed to delete file"),
  });

  const { isMutating: isUploading, trigger: uploadMedia } = useSWRMutation(
    url,
    mediaUploader
  );

  return {
    media: media ?? [],
    isLoading,
    isUploading,
    deleteMedia,
    uploadMedia,
  };
}
