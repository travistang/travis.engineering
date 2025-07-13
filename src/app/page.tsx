import { ROUTE_PROJECTS } from "@/constants/route";
import classNames from "classnames";
import Link from "next/link";
import { AboutSection } from "./components/about-section";
import { SocialButtonGroup } from "./components/contact-buttons";
import { RecentBlogPosts } from "./components/recent-blog-posts/recent-blog-posts";
import { SummarySection } from "./sections/summary-section";
import TargetAudienceSection from "./sections/target-audience-section";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <section
        className={classNames(
          "h-[50vh] md:h-[calc(80vh)] bg-white dark:bg-slate-darker",
          "flex",
          "px-4 md:px-8",
          "items-center justify-center md:justify-start md:items-stretch"
        )}
      >
        <div className="flex flex-col gap-4 items-center md:items-start justify-center">
          <h1>
            travis.<span className="text-primary">engineering</span>
          </h1>
          <h4 className="py-0 font-normal">
            A blog. A portfolio. A lot of thoughts.
          </h4>
          <SocialButtonGroup />
        </div>
      </section>
      <RecentBlogPosts />
      <SummarySection />
      <TargetAudienceSection />
      <AboutSection anchor="projects" title="Can I see some of your projects?">
        <p>
          Sure! You can find a list of notable projects I have worked on in the{" "}
          <Link href={ROUTE_PROJECTS}>project</Link> page.
        </p>
      </AboutSection>
    </div>
  );
}
