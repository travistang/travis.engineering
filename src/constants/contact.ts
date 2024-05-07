import { SocialMedia } from "@/services/sharing";

export type ContactType = {
  socialMedia: SocialMedia;
  value: string;
};

export const CONTACT_METHODS: ContactType[] = [
  {
    socialMedia: "linkedin",
    value: "https://linkedin.com/in/travisyttang",
  },
  {
    socialMedia: "github",
    value: "https://github.com/travistang",
  },
  {
    socialMedia: "email",
    value: "mailto:portfolio@travis.engineering",
  },
];
