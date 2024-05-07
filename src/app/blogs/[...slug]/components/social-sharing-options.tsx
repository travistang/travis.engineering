import { SocialButton } from "@/app/components/social-button";
import { SocialMedia } from "@/services/sharing";
import classNames from "classnames";

type Props = {
  className?: string;
  blogPath: string;
};

const SOCIAL_SHARING_OPTIONS: SocialMedia[] = [
  "linkedin",
  "twitter",
  "facebook",
  "email",
];
export const SocialSharingOptions = ({ blogPath, className }: Props) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-2 flex-wrap md:gap-4",
        className
      )}
    >
      {SOCIAL_SHARING_OPTIONS.map((socialMedia) => (
        <SocialButton
          className="h-8 w-8"
          key={socialMedia}
          path={blogPath}
          socialMedia={socialMedia}
        />
      ))}
    </div>
  );
};
