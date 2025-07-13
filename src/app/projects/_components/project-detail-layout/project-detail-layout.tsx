import { ROUTE_PROJECTS } from "@/constants/route";
import { Project } from "@/services/projects/types";
import { FaArrowLeft } from "react-icons/fa";
import { ProjectDetailHeader } from "../project-detail-header/project-detail-header";
import { ProjectScreenshot } from "../project-screenshot";

type Props = {
  project: Project;
  children: React.ReactNode;
};
export const ProjectDetailLayout = ({ children, project }: Props) => {
  return (
    <div className="flex flex-col items-stretch gap-4 p-4 bg-white dark:bg-slate-darker">
      <a
        href={ROUTE_PROJECTS}
        className="text-slate dark:text-white-darker flex items-center gap-2"
      >
        <FaArrowLeft />
        Back to projects
      </a>
      <ProjectDetailHeader project={project} />
      <a className="hidden" id="main-content" />
      {children}
      {!!project.screenshots?.length && (
        <>
          <h4>Screenshots</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.map((screenshot) => (
              <ProjectScreenshot key={screenshot.url} screenshot={screenshot} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
