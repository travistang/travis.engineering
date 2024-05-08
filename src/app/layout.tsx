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

const metadata = {
  title: "travis.engineering | Personal Blog by Travis Tang",
  name: "travis.engineering",
  url: "https://travis.engineering",
  description:
    "travis.engineering is the portfolio and personal blog created by Travis Tang, a full stack developer from Hong Kong specialized in React, TypeScript, TailwindCSS and Next.js",
  image: "/images/icon.png",
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
        <meta property="og:title" content={metadata.title} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content={metadata.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={metadata.name} />
        <meta property="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
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
