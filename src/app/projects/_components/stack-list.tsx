import classNames from "classnames";
import { StackBadge } from "./stack-badge";

type Props = {
  stacks: string[];
  maxItems?: number;
  className?: string;
};
export const StackList = ({ className, maxItems, stacks }: Props) => {
  const showingStacks = stacks.slice(0, maxItems);
  return (
    <div
      className={classNames("bg-transparent flex flex-wrap gap-2", className)}
    >
      {showingStacks.map((stack) => (
        <StackBadge key={stack} stack={stack} />
      ))}
      {showingStacks.length < stacks.length && (
        <span className="bg-transparent text-sm italic">
          +{stacks.length - showingStacks.length}
        </span>
      )}
    </div>
  );
};
