import { Project } from "../types";

export const TopBlogProject: Project = {
  id: "top-blog",
  name: "travis.engineering",
  isTop: true,
  hasDetails: true,
  description:
    "A blog that shares my thoughts and experiences in software development, as well as my portfolio of projects.",
  imageUrl: "/projects/top-blog/cover.png",
  stacks: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "MDX",
    "Vercel",
    "Static Site Generation (SSG)",
  ],
  startDate: new Date("2024-03-01").getTime(),
  links: {
    sourceCode: "https://github.com/travistang/top-blog",
  },
  screenshots: [],
};
