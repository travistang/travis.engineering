import classNames from "classnames";

export type Props = {
  className?: string;
  children?: React.ReactNode;
  title: string;
  anchor?: string;
};

export const AboutSection = ({ anchor, title, children, className }: Props) => {
  return (
    <section
      className={classNames(
        "flex flex-col gap-4 items-stretch dark:bg-slate-dark bg-white-dark",
        "py-8 px-4 md:px-8",
        className
      )}
    >
      <h2>
        {anchor && <a id={anchor} tabIndex={-1} />}
        {title}
      </h2>
      {children}
    </section>
  );
};
