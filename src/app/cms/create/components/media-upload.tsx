import { FormEventHandler, useCallback, useRef } from "react";
import toast from "react-hot-toast";
import { FaUpload } from "react-icons/fa";

type Props = {
  isUploading?: boolean;
  uploadMedia: (file: File) => Promise<void>;
};
export default function MediaUpload({ isUploading, uploadMedia }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      const selectedFile = inputRef.current?.files?.[0];
      if (!selectedFile) {
        toast.error("Please select a file to upload first!");
        return;
      }
      uploadMedia(selectedFile)
        .then(() => toast.success("File uploaded!"))
        .catch(() => toast.error("Failed to upload file"));
    },
    [uploadMedia]
  );
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
        disabled={isUploading}
        type="submit"
        className="btn btn-success btn-xs"
      >
        {isUploading ? (
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
