import classNames from "classnames";

type Props = {
  src: string;
  className?: string;
  caption?: string;
  alt: string;
  width?: number;
  height?: number;
};
export const ArticleImage = ({
  caption,
  src,
  className,
  alt,
  width,
  height,
}: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-2 text-sm italic items-center",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ height, width }} />
      <p>{caption ?? alt}</p>
    </div>
  );
};
