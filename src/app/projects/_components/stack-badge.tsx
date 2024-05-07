type Props = {
  stack: string;
  className?: string;
};
export const StackBadge = ({ stack }: Props) => {
  return (
    <div className="bg-slate-lighter dark:bg-white-darker text-slate  rounded-full px-2 py-1 text-xs">
      {stack}
    </div>
  );
};
