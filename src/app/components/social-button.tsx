"use client";

import {
  SOCIAL_MEDIA_ICON_MAP,
  SocialMedia,
  getSocialMediaLink,
} from "@/services/sharing";
import Link from "next/link";
import { IconButton } from "./icon-button";

type Props = {
  path: string;

  className?: string;
  socialMedia: SocialMedia;
};
export const SocialButton = ({ path, className, socialMedia }: Props) => {
  const Icon = SOCIAL_MEDIA_ICON_MAP[socialMedia];
  const href = getSocialMediaLink(socialMedia, path);
  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      target="_blank"
      role="link"
      tabIndex={-1}
      aria-label={`Link to my ${socialMedia}`}
    >
      <IconButton icon={Icon} className={className} />
    </Link>
  );
};
