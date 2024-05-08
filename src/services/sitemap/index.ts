import {
  ROUTE_ABOUT,
  ROUTE_BLOGS,
  ROUTE_BLOGS_BY_CATEGORY,
  ROUTE_BLOGS_BY_TAG,
  ROUTE_PROJECTS,
} from "@/constants/route";
import path from "path";
import {
  listArticleCategories,
  listArticleTags,
  listArticles,
} from "../articles";
import { projectsWithDetails } from "../projects";

const createSitemapEntry = (urlPath: string) => {
  return {
    url: "https://" + path.join("travis.engineering", urlPath),
    lastModified: new Date(),
  };
};

const getBlogEntries = async () => {
  const blogs = await listArticles();
  const categories = await listArticleCategories();
  const tags = await listArticleTags();
  return [
    ...blogs.map((blog) =>
      createSitemapEntry(path.join(ROUTE_BLOGS, ...blog.slug))
    ),
    ...categories.map((category) =>
      createSitemapEntry(
        path.join(ROUTE_BLOGS_BY_CATEGORY, encodeURIComponent(category))
      )
    ),
    ...tags.map((tag) =>
      createSitemapEntry(path.join(ROUTE_BLOGS_BY_TAG, encodeURIComponent(tag)))
    ),
  ];
};

const getProjectEntries = () => {
  return projectsWithDetails.map((project) =>
    createSitemapEntry(path.join(ROUTE_PROJECTS, project.id))
  );
};
const getStaticEntries = () => {
  return [ROUTE_ABOUT, ROUTE_BLOGS, ROUTE_PROJECTS].map((route) =>
    createSitemapEntry(route)
  );
};

export const getSitemapEntries = async () => {
  return [
    ...(await getBlogEntries()),
    ...getProjectEntries(),
    ...getStaticEntries(),
  ];
};
