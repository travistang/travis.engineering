import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import { Footer } from "./blogs/components/footer";
import { Header } from "./blogs/components/header";
import { SkipLink } from "./components/skip-link";

import "./globals.css";

export { metadata } from "@/services/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          montserrat.className,
          "min-h-screen flex flex-col items-stretch"
        )}
      >
        <Header />
        <SkipLink />
        <Analytics />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
