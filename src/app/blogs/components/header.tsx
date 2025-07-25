"use client";

import Brand from "@/app/components/brand";
import ThemeToggle from "@/app/components/theme-toggle";
import classNames from "classnames";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ReadingProgressBar } from "../[...slug]/components/reading-progress-bar";
import { HeaderItems } from "./header-items";
import HeaderMenu from "./header-menu";

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <header
        className={classNames(
          "sticky top-0 flex justify-between items-center p-4 bg-white dark:bg-slate-darker z-50"
        )}
      >
        <ReadingProgressBar />
        <Brand />
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex space-x-8 list-none">
              <HeaderItems />
              <ThemeToggle />
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <button
            role="menuitem"
            aria-label="open navigation menu"
            onClick={() => setMenuOpened(!menuOpened)}
            className="p-2 border border-slate rounded-sm"
          >
            <FaBars />
          </button>
        </div>
        <HeaderMenu opened={menuOpened} onClick={() => setMenuOpened(false)} />
      </header>
    </>
  );
};
