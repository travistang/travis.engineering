import { ArticleMetadata } from "@/services/metadata/types";
import classNames from "classnames";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

type Props = {
  preview: ArticleMetadata;
  onDelete?: () => void;
  onView?: () => void;
  onEdit?: () => void;
  className?: string;
};
export default function ArticlePreviewItem({
  preview,
  className,
  onDelete,
  onView,
  onEdit,
}: Props) {
  return (
    <div
      className={classNames(
        "h-fit grid grid-cols-6 grid-rows-2 gap-2 rounded-lg bg-neutral-600/20",
        className
      )}
    >
      <div className="rounded-l-lg bg-primary/20 h-full row-span-2 col-start-1 col-span-1" />

      <div className="pt-4 row-start-1 row-span-1 col-start-2 col-span-3">
        <h4>{preview.title}</h4>
      </div>
      <div className="pb-2 row-start-2 row-span-1 col-start-2 col-span-3">
        <span className="text-sm">{preview.summary || "-- No summary --"}</span>
      </div>
      <div className="row-start-1 col-start-5 col-span-2 row-span-2 flex items-center justify-end gap-2 pr-2">
        {onView && (
          <button onClick={onView} className="btn btn-ghost btn-square">
            <FaEye />
          </button>
        )}
        {onEdit && (
          <button onClick={onEdit} className="btn btn-ghost btn-square">
            <FaPen />
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className="btn btn-ghost text-error btn-square"
          >
            <FaTrash />
          </button>
        )}
      </div>
    </div>
  );
}
