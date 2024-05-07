"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [windowLoaded, setWindowLoaded] = useState(false);
  useEffect(() => {
    setWindowLoaded(true);
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          setTheme(
            document.documentElement.getAttribute("data-theme") as Theme
          );
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!windowLoaded)
    return (
      <span className="relative flex h-3 w-3 self-center ">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate dark:bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-darker dark:bg-white-lighter"></span>
      </span>
    );

  const onToggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };
  return (
    <button
      tabIndex={-1}
      onClick={onToggleTheme}
      className="h-6 w-6 rounded-full flex items-center overflow-visible"
    >
      {theme === "light" ? (
        <FaSun className="dark:text-white text-slate" />
      ) : (
        <FaMoon className="dark:text-white text-slate" />
      )}
    </button>
  );
}
