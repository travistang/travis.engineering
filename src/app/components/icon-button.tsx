import classNames from "classnames";
import { IconType } from "react-icons/lib";

type Props = {
  className?: string;
  text?: string;
  icon: IconType;
  onClick?: () => void;
};
export const IconButton = ({ text, onClick, className, icon: Icon }: Props) => {
  return (
    <button
      role="button"
      type="button"
      onClick={onClick}
      className={classNames(
        "gap-2 rounded-full flex items-center justify-center p-2 border border-primary text-primary hover:text-white hover:bg-primary transition-colors duration-300 hover:cursor-pointer",
        !text && "aspect-square",
        className
      )}
    >
      <Icon className="group-hover:text-primary" />
      {text}
    </button>
  );
};
