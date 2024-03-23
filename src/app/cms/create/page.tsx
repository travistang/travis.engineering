"use client";

import { FileMetadata } from "@/services/file-storage";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle, FaPhotoVideo, FaTrash } from "react-icons/fa";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import MediaUpload from "./components/media-upload";
import Section from "./components/section";

const mediaFetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json() as Promise<FileMetadata[]>;
};

const mediaRemover = async (url: string, { arg: fileUrl }: { arg: string }) => {
  const response = await fetch(`${url}?path=${encodeURIComponent(fileUrl)}`, {
    method: "DELETE",
  });
  const data = (await response.json()) as { deleted: boolean };
  if (!data?.deleted) {
    throw new Error("Failed to delete file");
  }
  return true;
};

export default function CMSCreatePage() {
  const [content, setContent] = useState("");
  const onCopyMediaURL = (url: string) => {
    navigator.clipboard.writeText(`![image](${url})`);
    toast.success("Media URL copied to clipboard!");
  };
  const { data, isLoading } = useSWR(`/api/files/placeholder`, mediaFetcher);
  const { trigger: deleteMedia } = useSWRMutation(
    `/api/files/placeholder`,
    mediaRemover,
    {
      onSuccess: () => toast.success("File removed"),
      onError: () => toast.error("Failed to delete file"),
    }
  );
  return (
    <div className="flex flex-col item-stretch py-4 px-2 gap-4">
      <div className="py-4 flex items-center justify-between pr-4 pl-2">
        <h1 className="text-4xl">Create a blog</h1>
        <button className="btn btn-success">
          <FaCheckCircle />
          Publish
        </button>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row items-stretch">
        <Section
          className="w-full lg:w-fit gap-4"
          title="Media"
          icon={FaPhotoVideo}
        >
          <MediaUpload />
          {isLoading && (
            <span className="loading loading-spinner loading-lg self-center" />
          )}
          <div className="flex lg:flex-col flex-nowrap overflow-x-auto snap-x gap-2">
            {data?.map((meta) => (
              <div
                key={meta.url}
                className="relative rounded-lg w-24 h-24 lg:w-48 lg:h-48 aspect-square flex flex-col overflow-hidden"
              >
                <img
                  src={meta.url}
                  alt={meta.name}
                  className="w-full h-full object-cover"
                  onClick={() => onCopyMediaURL(meta.url)}
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-neutral-700/75 flex items-center justify-between text-xs italic p-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {meta.name}
                  <button
                    onClick={() => deleteMedia(meta.url)}
                    className="btn btn-ghost btn-circle btn-error btn-xs"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <MDEditor
          autoFocus
          className="lg:min-w-max flex-1 mx-4 text-lg h-full"
          value={content}
          onChange={(v) => setContent(v ?? "")}
        />
      </div>
    </div>
  );
}
