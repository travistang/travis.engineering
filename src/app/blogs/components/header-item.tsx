import classNames from "classnames";
import Link from "next/link";

type Props = {
  href: string;
  className?: string;
  text: string;
  tabIndex?: number;
  onClick?: () => void;
};
export const HeaderItem = ({
  onClick,
  tabIndex,
  className,
  href,
  text,
}: Props) => {
  return (
    <Link
      onClick={onClick}
      tabIndex={tabIndex}
      href={href}
      className={classNames(
        "w-full md:w-auto",
        "p-2 md:p-0 border-b border-b-slate/50 dark:border-b-white-dark/50 md:border-none hover:text-primary cursor-pointer uppercase md:capitalize",
        className
      )}
    >
      {text}
    </Link>
  );
};
