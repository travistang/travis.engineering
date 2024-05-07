import { BsTwitterX } from "react-icons/bs";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type SocialMedia =
  | "github"
  | "linkedin"
  | "twitter"
  | "link"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "email";

type SocialMediaShareOptions = {
  title: string;
};
export const SOCIAL_MEDIA_ICON_MAP: Record<SocialMedia, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: BsTwitterX,
  link: FaLink,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  facebook: FaFacebook,
  email: FaEnvelope,
};

export const getSocialMediaLink = (
  socialMedia: SocialMedia,
  path: string,
  options: SocialMediaShareOptions = {
    title: "Check out this blog post on travis.engineering!",
  }
) => {
  switch (socialMedia) {
    case "linkedin":
      return `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        path
      )}`;
    case "twitter":
      return `https://x.com/share?text=${encodeURIComponent(
        options.title
      )}&url=${encodeURIComponent(path)}`;
    case "email":
      return `mailto:?subject=${encodeURIComponent(
        options.title
      )}&body=${encodeURIComponent(path)}`;
    case "link":
      return `https://travis.engineering/blogs/${path}`;
    case "whatsapp":
      return `whatsapp://send?text=${encodeURIComponent(
        options.title
      )} ${encodeURIComponent(path)}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        path
      )}`;
    default:
      return "";
  }
};
