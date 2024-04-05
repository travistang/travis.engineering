import classNames from "classnames";

type Props = {
  id: string;
  onConfirm: () => void;
  onCancel?: () => void;
  loading?: boolean;
};
export default function ConfirmActionModal({
  loading,
  id,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are you sure?</h3>
        <p className="py-4">Press "Confirm" to confirm your action.</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn mr-4" onClick={onCancel}>
              Cancel
            </button>
            <button
              disabled={loading}
              onClick={onConfirm}
              className={classNames("btn btn-error", loading && "loading")}
            >
              {loading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Confirm"
              )}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
