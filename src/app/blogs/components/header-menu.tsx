import ThemeToggle from "@/app/components/theme-toggle";
import { SELECTOR_PUBLIC_HEADER_MENU } from "@/constants/selectors";
import classNames from "classnames";
import { HeaderItems } from "./header-items";

type Props = {
  opened?: boolean;
  onClick?: () => void;
};
export default function HeaderMenu({ onClick, opened }: Props) {
  return (
    <div
      id={SELECTOR_PUBLIC_HEADER_MENU}
      className={classNames(
        `absolute top-full left-0 w-full bg-white dark:bg-slate transition-transform duration-300 md:hidden -z-20 shadow-lg`,
        opened ? "-translate-y-0" : "-translate-y-[200%]"
      )}
    >
      <nav className="flex flex-col items-stretch justify-start space-y-4 p-4">
        <ul className="flex flex-col space-y-4">
          <HeaderItems onClick={onClick} nonTabbable={!opened} />
        </ul>
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
