"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

const LS_THEME_KEY = "theme";

const persistTheme = (theme: Theme) => {
  localStorage.setItem(LS_THEME_KEY, theme);
};

const computeDefaultTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const savedTheme = localStorage.getItem(LS_THEME_KEY);
  if (savedTheme) return savedTheme as Theme;
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  persistTheme(defaultTheme);
  return defaultTheme;
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(computeDefaultTheme());
  const [windowLoaded, setWindowLoaded] = useState(false);
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    persistTheme(nextTheme);
  };

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
    document.documentElement.setAttribute("data-theme", computeDefaultTheme());
    return () => {
      observer.disconnect();
    };
  }, []);

  if (!windowLoaded)
    return (
      <span className="relative flex h-3 w-3 self-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate dark:bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-darker dark:bg-white-lighter"></span>
      </span>
    );

  return (
    <button
      tabIndex={-1}
      onClick={toggleTheme}
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
