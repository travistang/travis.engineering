import { IconButton } from "@/app/components/icon-button";
import { Project } from "@/services/projects/types";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

export const TOPProjectPreview = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col items-stretch p-2 rounded-lg">
      <h4 className="font-bold">{project.name}</h4>
      <p>{project.description}</p>
      {project.links.sourceCode && (
        <Link href={project.links.sourceCode}>
          <IconButton icon={FaCode} text="Source code" />
        </Link>
      )}
    </div>
  );
};
