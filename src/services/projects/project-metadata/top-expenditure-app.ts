import { Project } from "../types";

export const TopExpenditureAppProject: Project = {
  id: "top-expenditure-app",
  name: "TOP Expenditure App",
  isTop: true,
  hasDetails: true,
  description:
    "An app that helps you track your daily expenses and provides you with a detailed analysis of your spending.",
  imageUrl: "/projects/top-expenditure-app/cover.png",
  stacks: [
    "React",
    "TypeScript",
    "TailwindCSS",
    "IndexDB",
    "Service Worker",
    "GitHub Action",
    "GitHub Pages",
  ],
  startDate: new Date("2023-11-07").getTime(),
  links: {
    sourceCode: "https://github.com/travistang/top-expenditure-app",
    product: "",
  },
  screenshots: [
    {
      url: "/projects/top-expenditure-app/main-page.jpeg",
      title: "Main expenditure logging page",
      description:
        "The most recent expenditure logging page. Based on my personal usage experience it is only the amount and the category of expenditures that matter the most (there are other fields such as name, tags, and date in the “info” tab should you choose to amend them) so I kept only these options on the main page.",
    },
    {
      url: "/projects/top-expenditure-app/category-details.jpeg",
      title: "Expenditure category details page",
      description:
        "Allows you to view recent expenditures under a category, modify budgets and its percentage used in the current month, as well as modifying icons and colors of the category.",
    },
    {
      url: "/projects/top-expenditure-app/statistics.jpeg",
      title: "Statistics page",
      description:
        "Shows the expenditures of the month and how they are distributed amongst expenditures. You can also see the expenditure trends and can choose if you want to see regular expenditures on the same graph as well.",
    },
    {
      url: "/projects/top-expenditure-app/regular-expenditure.jpeg",
      title: "Regular expenditure page",
      description:
        "Page in which you can create, edit and view your regular expenditures and income. (Data are real so I redacted the name of the expenditures)",
    },
  ],
};
