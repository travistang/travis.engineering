import { CONTACT_METHODS } from "@/constants/contact";
import { SOCIAL_MEDIA_ICON_MAP } from "@/services/sharing";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  className?: string;
};
export const SocialButtonGroup = ({ className }: Props) => {
  return (
    <div className={classNames("flex items-center gap-4 flex-wrap", className)}>
      {CONTACT_METHODS.map(({ socialMedia, value }) => {
        const Icon = SOCIAL_MEDIA_ICON_MAP[socialMedia];
        return (
          <Link
            key={value}
            role="link"
            tabIndex={-1}
            target="_blank"
            href={value}
          >
            <button
              className={classNames(
                "rounded-full md:text-xl aspect-square flex items-center justify-center p-2 border border-primary text-primary",
                "hover:text-white hover:bg-primary",
                "transition-colors duration-300"
              )}
            >
              <Icon />
            </button>
          </Link>
        );
      })}
    </div>
  );
};
