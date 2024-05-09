import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import colors from "tailwindcss/colors";

const calculateReadingProgress = () => {
  const pageHeight = document.documentElement.scrollHeight;
  const viewportHeight = document.documentElement.clientHeight;
  const currentScrollPosition = document.documentElement.scrollTop;
  return currentScrollPosition / (pageHeight - viewportHeight);
};

const setProgressBar = (
  progressBar: HTMLDivElement | null,
  progressBarContainer: HTMLDivElement | null,
  ratio: number
) => {
  if (!progressBar || !progressBarContainer) return;
  progressBarContainer.style.backgroundColor =
    ratio < 0.01 ? "transparent" : `${colors.slate[500]}30`;
  progressBar.style.width = `${ratio * 100}%`;
};

export const ReadingProgressBar = () => {
  const progressBar = useRef<HTMLDivElement>(null);
  const progressBarContainer = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const inBlogPost = /^\/blogs\/(?!category|tags).+$/.test(pathName);
  useEffect(() => {
    if (!inBlogPost) {
      return;
    }
    const progressBarRef = progressBar.current;
    const progressBarContainerRef = progressBarContainer.current;
    const scrollListener = () => {
      const ratio = calculateReadingProgress();
      setProgressBar(progressBar.current, progressBarContainer.current, ratio);
    };

    document.addEventListener("scroll", scrollListener);

    return () => {
      setProgressBar(progressBarRef, progressBarContainerRef, 0);
      document.removeEventListener("scroll", scrollListener);
    };
  }, [inBlogPost]);

  return (
    <div
      role="presentation"
      ref={progressBarContainer}
      className={classNames(
        "absolute top-full left-0 right-0 h-1 md:h-2 -z-30 transition-colors duration-300"
      )}
    >
      <div
        ref={progressBar}
        className="z-10 absolute top-0 left-0 h-full bg-primary"
      />
    </div>
  );
};
