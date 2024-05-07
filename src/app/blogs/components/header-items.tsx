import { ROUTE_ABOUT, ROUTE_BLOGS, ROUTE_PROJECTS } from "@/constants/route";
import { HeaderItem } from "./header-item";

type Props = {
  nonTabbable?: boolean;
};
export const HeaderItems = ({ nonTabbable }: Props) => {
  return (
    <>
      <HeaderItem
        tabIndex={nonTabbable ? -1 : 2}
        text="about"
        href={ROUTE_ABOUT}
      />
      <HeaderItem
        tabIndex={nonTabbable ? -1 : 3}
        text="projects"
        href={ROUTE_PROJECTS}
      />
      <HeaderItem
        tabIndex={nonTabbable ? -1 : 4}
        text="blog"
        href={ROUTE_BLOGS}
      />
    </>
  );
};
