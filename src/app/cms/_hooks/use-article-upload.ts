import toast from "react-hot-toast";
import useSWRMutation from "swr/mutation";
import {
  MetadataFormValue,
  formDataFromMetadataForm,
} from "../components/create-edit-page/_utils/metadata-form";

type UseArticleUploadResponse = {
  isUploading?: boolean;
  upload: (uploadProps: {
    metadata: MetadataFormValue;
    article: string;
  }) => Promise<{ id: string }>;
};

const articleUploader = async (
  url: string,
  {
    arg: { metadata, article },
  }: { arg: { metadata: MetadataFormValue; article: string } }
) => {
  const formData = formDataFromMetadataForm(metadata);
  formData.append("article", article);
  const response = await fetch(url, {
    body: formData,
    method: "PATCH",
  });
  return response.json() as Promise<{ id: string }>;
};
export default function useArticleUpload(
  articleId: string
): UseArticleUploadResponse {
  const { trigger, isMutating: isUploading } = useSWRMutation(
    `/api/articles/${articleId}`,
    articleUploader,
    {
      onError: () => toast.error("Failed to upload article!"),
      onSuccess: () => toast.success("Article uploaded!"),
    }
  );
  return {
    isUploading,
    upload: trigger,
  };
}
