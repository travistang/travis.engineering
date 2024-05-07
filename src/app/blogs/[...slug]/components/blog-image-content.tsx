import Image from "next/image";
import path from "path";

type Props = {
  rootPath: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
};
export const BlogImageContent = ({
  rootPath,
  fileName,
  alt,
  width,
  height,
}: Props) => {
  return (
    <Image
      alt={alt}
      src={path.join(rootPath, fileName)}
      width={width}
      height={height}
    />
  );
};
