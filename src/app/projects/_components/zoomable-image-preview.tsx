"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { ImagePreview } from "./image-preview";
type Props = {
  url: string;
  alt: string;
};
export const ZoomableImagePreview = ({ url, alt }: Props) => {
  const [opened, setOpened] = useState(false);
  const onPreviewClick = () => {
    setOpened(true);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpened(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (opened)
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="imageCaption"
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        onClick={() => setOpened(false)}
      >
        <Image
          src={url}
          alt={alt}
          objectFit="contain"
          layout="fill"
          className="max-w-2/3 max-h-2/3"
        />
      </div>
    );
  return (
    <ImagePreview
      src={url}
      alt={alt}
      className="relative col-span-4 h-36 md:h-48 flex-shrink-0 group overflow-hidden bg-slate/20 dark:bg-slate-light/20"
    >
      {!opened && (
        <div
          onClick={onPreviewClick}
          className="cursor-pointer bg-slate-darker/50 flex items-center justify-center absolute inset-0 text-white z-10 opacity-0 group-hover:opacity-100"
        >
          <FaEye />
        </div>
      )}
    </ImagePreview>
  );
};
