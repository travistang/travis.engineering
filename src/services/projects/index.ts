import { TopBlogProject } from "./project-metadata/top-blog";
import { TopDepartureDashboardProject } from "./project-metadata/top-departure-dashboard";
import { TopExpenditureAppProject } from "./project-metadata/top-expenditure-app";
import { TopNutritionAppProject } from "./project-metadata/top-nutrition-app";
export const projects = [
  TopBlogProject,
  TopNutritionAppProject,
  TopExpenditureAppProject,
  TopDepartureDashboardProject,
];
export const topProjects = projects.filter((project) => project.isTop);
export const projectsWithDetails = projects.filter(
  (project) => project.hasDetails
);
export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);
