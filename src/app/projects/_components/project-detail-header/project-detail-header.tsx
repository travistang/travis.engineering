import { IconButton } from "@/app/components/icon-button";
import { Project } from "@/services/projects/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaEye } from "react-icons/fa";
import { StackList } from "../stack-list";

export const ProjectDetailHeader = ({ project }: { project: Project }) => {
  return (
    <div className="flex md:flex-row gap-4">
      <div className="flex flex-col items-stretch gap-4 flex-1">
        <h1>{project.name}</h1>
        <div className="flex items-center gap-2">
          <span>{format(project.startDate, "MM/yyyy")}</span>
          {project.endDate && (
            <span>- {format(project.endDate, "MM/yyyy")}</span>
          )}
        </div>
        <StackList stacks={project.stacks} />
        <div className="flex flex-wrap gap-4 items-center">
          {project.links.sourceCode && (
            <Link href={project.links.sourceCode}>
              <IconButton icon={FaCode} text="Source code" />
            </Link>
          )}
          {project.links.product && (
            <Link href={project.links.product}>
              <IconButton icon={FaEye} text="Product" />
            </Link>
          )}
        </div>
      </div>
      <div className="hidden md:block rounded-lg col-span-4 relative w-full md:w-auto md:h-48 aspect-square overflow-hidden flex-shrink-0">
        <Image
          src={project.imageUrl}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
