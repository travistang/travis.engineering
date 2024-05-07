import { Project } from "../types";

export const TopDepartureDashboardProject: Project = {
  id: "top-departure-dashboard",
  name: "TOP Departure Dashboard",
  isTop: true,
  hasDetails: true,
  description:
    "A dashboard that shows you the departure time of the next bus or train from your location - tailor-made for you.",
  imageUrl: "/projects/top-departure-dashboard/cover.png",
  stacks: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Google Maps API",
    "Geolocation",
    "MongoDB",
    "Vercel",
  ],
  startDate: new Date("2022-07-01").getTime(),
  links: {},
  screenshots: [
    {
      url: "/projects/top-departure-dashboard/cover.png",
      title: "Dashboard page",
      description:
        "Main page of the dashboard that shows you the departure time of the next bus or train from your location.",
    },
  ],
};
