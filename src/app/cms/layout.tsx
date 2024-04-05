import { SELECTOR_CMS_NAV_BUTTON } from "@/constants";
import classNames from "classnames";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "../globals.css";

export const metadata: Metadata = {
  title: "TOP Blog CMS",
  description: "CMS for Travis' Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          GeistSans.className,
          "h-screen w-screen flex flex-col items-stretch overflow-hidden"
        )}
      >
        <Toaster />
        <nav className="bg-base-100 flex items-center h-16 md:h-20 py-2 px-4 sticky top-0 z-20">
          <a href="/cms">
            <span className="text-lg">
              TOP Blog <b className="text-sm font-bold text-primary">CMS</b>
            </span>
          </a>
          <div className="flex-1"></div>
          <div>
            <div
              className="flex gap-2 items-center"
              id={SELECTOR_CMS_NAV_BUTTON}
            />
          </div>
        </nav>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
