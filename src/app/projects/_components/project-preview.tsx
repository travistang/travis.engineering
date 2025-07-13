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
        "flex flex-row gap-2 mt-2",
        className
      )}
    >
      <div className="rounded-t-lg relative h-32 md:h-48 aspect-square">
        <Image
          src={project.imageUrl}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 items-stretch gap-2 content">
        <h4 className="font-bold">{project.name}</h4>
        <StackList stacks={project.stacks} maxItems={3} />
        <h6 className="line-clamp-2 overflow-ellipsis">
          {project.description}
        </h6>
      </div>
    </Link>
  );
};
