import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import colors from "tailwindcss/colors";

export const ReadingProgressBar = () => {
  const progressBar = useRef<HTMLDivElement>(null);
  const progressBarContainer = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const inBlogPost = /^\/blogs\/.+$/.test(pathName);
  useEffect(() => {
    if (!inBlogPost) {
      return;
    }
    const progressBarRef = progressBar.current;
    const progressBarContainerRef = progressBarContainer.current;
    const scrollListener = () => {
      if (!progressBar.current || !progressBarContainer.current) return;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = document.documentElement.clientHeight;
      const currentScrollPosition = document.documentElement.scrollTop;
      const ratio = currentScrollPosition / (pageHeight - viewportHeight);
      progressBarContainer.current.style.backgroundColor =
        ratio < 0.01 ? "transparent" : `${colors.slate[500]}30`;
      progressBar.current.style.width = `${ratio * 100}%`;
    };
    document.addEventListener("scroll", scrollListener);
    return () => {
      if (progressBarRef && progressBarContainerRef) {
        progressBarContainerRef.style.backgroundColor = "transparent";
        progressBarRef.style.width = "0%";
      }
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
