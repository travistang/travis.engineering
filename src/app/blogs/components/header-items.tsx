import { ROUTE_ABOUT, ROUTE_BLOGS, ROUTE_PROJECTS } from "@/constants/route";
import { HeaderItem } from "./header-item";

type Props = {
  nonTabbable?: boolean;
  onClick?: () => void;
};
export const HeaderItems = ({ onClick, nonTabbable }: Props) => {
  return (
    <>
      <HeaderItem
        onClick={onClick}
        tabIndex={nonTabbable ? -1 : 2}
        text="about"
        href={ROUTE_ABOUT}
      />
      <HeaderItem
        onClick={onClick}
        tabIndex={nonTabbable ? -1 : 3}
        text="projects"
        href={ROUTE_PROJECTS}
      />
      <HeaderItem
        onClick={onClick}
        tabIndex={nonTabbable ? -1 : 4}
        text="blog"
        href={ROUTE_BLOGS}
      />
    </>
  );
};
