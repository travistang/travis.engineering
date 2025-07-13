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
    <li>
      <Link
        onClick={onClick}
        tabIndex={tabIndex}
        href={href}
        className={classNames(
          "w-full md:w-auto",
          "p-2 md:p-0 hover:text-primary cursor-pointer uppercase md:capitalize text-slate dark:text-white decoration-none",
          className
        )}
      >
        {text}
      </Link>
    </li>
  );
};
