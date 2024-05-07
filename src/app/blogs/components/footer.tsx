import { SocialButtonGroup } from "@/app/components/contact-buttons";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate p-4 flex justify-between items-center">
      <span className="text-sm md:text-md">
        &copy; {new Date().getFullYear()} travis.engineering. All rights
        reserved.
      </span>
      <SocialButtonGroup className="py-4 md:p-0 flex-nowrap" />
    </footer>
  );
};
