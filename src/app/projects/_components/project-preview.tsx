import { ROUTE_PROJECTS } from "@/constants/route";
import { Project } from "@/services/projects/types";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { StackList } from "./stack-list";

type Props = {
  className?: string;
  project: Project;
};
export const ProjectPreview = ({ className, project }: Props) => {
  return (
    <Link
      href={`${ROUTE_PROJECTS}/${project.id}`}
      className={classNames(
        "rounded-lg flex flex-col items-stretch overflow-hidden",
        "bg-white-darker dark:bg-slate-darker md:shadow-md",
        "text-slate dark:text-white hover:text-slate dark:hover:text-white  hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      <div className="rounded-t-lg w-full relative h-48">
        <Image
          src={project.imageUrl}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 items-stretch gap-2 bg-white-dark dark:bg-slate-darker ">
        <h4 className="font-bold">{project.name}</h4>
        <StackList stacks={project.stacks} maxItems={3} />
        <h6 className="line-clamp-2 overflow-ellipsis">
          {project.description}
        </h6>
      </div>
    </Link>
  );
};
