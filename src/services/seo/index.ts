import { Metadata } from "next";

const rawMetadata = {
  url: "https://travis.engineering",
  title: "travis.engineering | Personal Blog by Travis Tang",
  icon: "https://www.travis.engineering/icon.png",
  name: "travis.engineering",
  description:
    "travis.engineering is the portfolio and personal blog created by Travis Tang, a full stack developer from Hong Kong specialized in React, TypeScript, TailwindCSS and Next.js",
};

export const metadata: Metadata = {
  title: rawMetadata.title,
  applicationName: rawMetadata.name,
  authors: { name: "Travis Tang", url: "https://travis.engineering" },
  keywords:
    "Next.js, react, blog, fullstack, TypeScript, Developer, TailwindCSS, Node.js, Angular, Germany, UK, United Kingdom, Europe, Web Development, Software Development, Software Engineering, Software Developer, Software Engineer, Frontend, Backend, Full Stack, Fullstack, Web Developer, Web Engineer, Web Development, Web Design, Web Designer, ",
  description: rawMetadata.description,
  twitter: {
    card: "summary_large_image",
    images: rawMetadata.icon,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: rawMetadata.url,
    siteName: rawMetadata.name,
    images: [
      {
        url: rawMetadata.icon,
        width: 800,
        height: 600,
        alt: "travis.engineering logo",
      },
    ],
  },
};
