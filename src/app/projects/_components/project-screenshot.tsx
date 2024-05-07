import { ProjectScreenshot as ProjectScreenshotType } from "@/services/projects/types";
import { ZoomableImagePreview } from "./zoomable-image-preview";

type Props = {
  screenshot: ProjectScreenshotType;
};
export const ProjectScreenshot = ({ screenshot }: Props) => {
  return (
    <div className="flex gap-4">
      <ZoomableImagePreview url={screenshot.url} alt={screenshot.description} />
      <div className="flex flex-col gap-2 flex-1">
        <h5 className="font-bold text-lg">{screenshot.title}</h5>
        <h6 className="text-justify">{screenshot.description}</h6>
      </div>
    </div>
  );
};
