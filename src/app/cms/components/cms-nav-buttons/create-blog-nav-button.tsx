import { SELECTOR_CMS_NAV_BUTTON } from "@/constants";
import { ROUTE_CMS_BLOG_CREATE } from "@/constants/route";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa";
import useDomLoaded from "../../_hooks/use-dom-loaded";

export default function CreateBlogNavButton() {
  const loaded = useDomLoaded();
  if (!loaded) return null;

  return createPortal(
    <a href={ROUTE_CMS_BLOG_CREATE} className="btn btn-primary">
      <FaPlus />
      Create blog
    </a>,
    document.getElementById(SELECTOR_CMS_NAV_BUTTON)!
  );
}
