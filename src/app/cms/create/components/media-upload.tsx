import { FormEventHandler, useRef } from "react";
import toast from "react-hot-toast";
import { FaUpload } from "react-icons/fa";
import useSWRMutation from "swr/mutation";

const uploader = async (url: string, { arg }: { arg: File }) => {
  const formData = new FormData();
  formData.append("file", arg);
  const response = await fetch(url, {
    method: "PUT",
    body: formData,
  });
  return response.json();
};
export default function MediaUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMutating, trigger: upload } = useSWRMutation(
    `/api/files/placeholder`,
    uploader
  );
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const selectedFile = inputRef.current?.files?.[0];
    if (!selectedFile) {
      toast.error("Please select a file to upload first!");
      return;
    }
    upload(selectedFile)
      .then(() => toast.success("File uploaded!"))
      .catch(() => toast.error("Failed to upload file"));
  };
  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      encType="multipart/form-data"
      action="/api/files/placeholder"
    >
      <input
        ref={inputRef}
        type="file"
        name="file"
        className="input file-input file-input-ghost input-xs"
      />
      <button
        disabled={isMutating}
        type="submit"
        className="btn btn-success btn-xs"
      >
        {isMutating ? (
          <span className="loading loading-spinner loading-spinner-xs" />
        ) : (
          <>
            <FaUpload />
            Upload
          </>
        )}
      </button>
    </form>
  );
}
