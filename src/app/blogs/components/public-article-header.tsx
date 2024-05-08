"use client";

import Brand from "@/app/components/brand";
import ThemeToggle from "@/app/components/theme-toggle";
import classNames from "classnames";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HeaderItems } from "./header-items";
import HeaderMenu from "./header-menu";

export default function PublicArticleHeader() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <header
        className={classNames(
          "relative flex justify-between items-center p-4 bg-white dark:bg-slate z-50",
          "after:absolute after:inset-0 after:-z-10 after:bg-white after:dark:bg-slate"
        )}
      >
        <Brand />
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex space-x-8">
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
}
