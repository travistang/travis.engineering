import classNames from "classnames";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Footer } from "./blogs/components/footer";
import PublicArticleHeader from "./blogs/components/public-article-header";
import { SkipLink } from "./components/skip-link";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "travis.engineering",
  description:
    "travis.engineering is the portfolio and personal blog created by Travis Tang, a full stack developer from Hong Kong specialized in React, TypeScript, TailwindCSS and Next.js",
  image: "/images/icon.svg",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="og:image" content={metadata.image} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body
        className={classNames(
          montserrat.className,
          "min-h-screen flex flex-col items-stretch"
        )}
      >
        <PublicArticleHeader />
        <SkipLink />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
