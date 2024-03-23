import classNames from "classnames";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
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
        <nav className="flex items-center h-16 md:h-20 py-2 px-4 sticky top-0 shadow-lg bg-neutral z-20">
          <span className="text-lg">
            TOP Blog <b className="text-sm font-bold text-primary">CMS</b>
          </span>
          <div className="flex-1"></div>
          <div>
            <a href="/cms/create" className="btn btn-primary">
              <FaPlus />
              Create blog
            </a>
          </div>
        </nav>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
