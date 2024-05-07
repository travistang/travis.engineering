import classNames from "classnames";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};
export const ImagePreview = ({ src, alt, className, children }: Props) => {
  return (
    <div className={classNames("rounded-lg aspect-square", className)}>
      {children}
      <Image src={src} alt={alt} objectFit="contain" layout="fill" />
    </div>
  );
};
