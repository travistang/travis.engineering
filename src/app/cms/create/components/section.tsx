import classNames from "classnames";
import { IconType } from "react-icons";

type Props = {
  className?: string;
  children: React.ReactNode;
  title?: string;
  icon?: IconType;
};
export default function Section({
  className,
  children,
  title,
  icon: Icon,
}: Props) {
  return (
    <div
      className={classNames(
        "rounded-lg shadow-lg p-4 bg-neutral-700/20",
        className
      )}
    >
      <h3 className="text-lg font-bold flex items-center gap-2 pb-2">
        {Icon && <Icon />}
        {title}
      </h3>
      {children}
    </div>
  );
}
