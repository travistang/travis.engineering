import { SELECTOR_CMS_NAV_BUTTON } from "@/constants";
import { createPortal } from "react-dom";
import { FaCheckCircle } from "react-icons/fa";
import useDomLoaded from "../../_hooks/use-dom-loaded";

type Props = {
  onClick: () => void;
  isLoading?: boolean;
};
export default function PublishBlogButton({ onClick, isLoading }: Props) {
  const loaded = useDomLoaded();
  if (!loaded) return null;
  return createPortal(
    <button onClick={onClick} className="btn btn-success">
      {isLoading ? (
        <span className="loading loading-spinner" />
      ) : (
        <>
          <FaCheckCircle />
          Publish
        </>
      )}
    </button>,
    document.getElementById(SELECTOR_CMS_NAV_BUTTON)!
  );
}
