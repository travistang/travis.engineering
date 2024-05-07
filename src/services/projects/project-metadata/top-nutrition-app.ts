import { Project } from "../types";

export const TopNutritionAppProject: Project = {
  id: "top-nutrition-app",
  name: "TOP Nutrition App",
  isTop: true,
  hasDetails: true,
  description:
    "An app that helps you track your daily food intake and provides you with a detailed analysis of your diet.",
  imageUrl: "/projects/top-nutrition-app/cover.png",
  stacks: [
    "React",
    "TypeScript",
    "TailwindCSS",
    "IndexDB",
    "Service Worker",
    "GitHub Action",
    "GitHub Pages",
  ],
  startDate: new Date("2022-07-01").getTime(),
  links: {
    sourceCode: "https://github.com/travistang/TOP-Nutrition-App/",
    product: "https://travistang.github.io/TOP-Nutrition-App/",
  },
  screenshots: [
    {
      url: "/projects/top-nutrition-app/main-page.jpeg",
      title: "Main page",
      description:
        "Main page of the app that shows you the summary of the marco-nutrition you have consumed today. Also shows you a list of food you have logged in today.",
    },
    {
      url: "/projects/top-nutrition-app/exercise-page.jpeg",
      title: "Exercise page",
      description:
        "This page shows the list of sets of exercises you do today. This is also the page I stare at most of the time when I am at the gym. The timer in blue will be visible in all pages.",
    },
    {
      url: "/projects/top-nutrition-app/food-container-detail.jpeg",
      title: "Food container detail page",
      description:
        "Meals that you prepared and kept in food boxes can be recorded as food containers in which the contents are also tracked. If you consume the contents, you can add the macros in the container to your daily consumption. This page shows the contents and the macros of a container",
    },
    {
      url: "/projects/top-nutrition-app/workout-summary.jpeg",
      title: "Workout summary page",
      description:
        "This shows a calendar on which each day of workouts are marked in different colors, so you can review the types of workouts and sets you have done previously.",
    },
    {
      url: "/projects/top-nutrition-app/meal-prep.jpeg",
      title: "Workout summary page",
      description:
        "When you prepare multiple meals at once and store them in different food boxes, you can use this meal prep form to divide macros of food you added amongst the selected food containers you have registered (it’s assumed that the contents are equally divided). This saves you time to do the math and instead focus on making the food.",
    },
    {
      url: "/projects/top-nutrition-app/measurement-details.jpeg",
      title: "Workout summary page",
      description:
        "A chart that shows the measurements you recorded (weights here for example), as well as the macros you took every day in the last 3 months (up to a year of record can be shown at once)",
    },
  ],
};
