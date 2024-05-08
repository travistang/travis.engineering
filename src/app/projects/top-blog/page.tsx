import { TopBlogProject } from "@/services/projects/project-metadata/top-blog";
import { ProjectDetailLayout } from "../_components/project-detail-layout/project-detail-layout";

export default async function TopBlogDetailPage() {
  return (
    <ProjectDetailLayout project={TopBlogProject}>
      <h4>Introduction</h4>
      <p>
        This site (travis.engineering, aka <i>TOP Blog</i>) is developed with
        Next.js 14 (TypeScript), and styled with Tailwind. It is my personal
        blog as well as a portfolio to provide links and insights to some of the
        projects I have personally created.
      </p>
      <p>
        I have made attempts to create my own portfolio previously such as{" "}
        &quot;
        <a href="https://github.com/travistang/about-me" target="_blank">
          About me
        </a>{" "}
        &quot; and they mostly remain a single-paged static site. Since they are
        written in older technologies, in JavaScript (instead of TypeScript) and
        not being aligned with the current approach I use to create web
        applications, I decided to create yet another one from scratch with a
        blog included as a platform the express my opinions, demonstrating my
        thinking process and personal achievements.
      </p>
      <p>
        Initially there&apos;s a custom-made content management system (CMS)
        built into this site (details are found in this{" "}
        <a href="/blogs/2024/05/cms-or-not">blog post</a>) with plans to add
        authentication, server-side rendering, fine-grained access control to
        blog posts, short links and even a Resume generator. However as I began
        my job search in April 2024 it became clear to me that having this site
        available online as soon as possible is much more important than
        developing these extra features, which will most likely be overlooked
        with minimal benefits, that I eventually decided to write blog posts as
        Markdown that is stored together with the source code and scrapped the
        entire CMS system and all non-essential features related to the blog.
        The resume generator and any CV-related logic are isolated to a project
        that I named <i>top-cv</i> and it will appear in the list of projects
        here once it is production-ready.
      </p>

      <h4>Techniques</h4>
      <p>
        The project makes use of Next.js&apos;s ability to detect and render
        pages during the build time, known as{" "}
        <a
          href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation"
          target="_blank"
        >
          Static Site Generation
        </a>{" "}
        to allow a better performance and create positive impact of Search
        Engine Optimization (SEO). I have also put some efforts in tailor-making
        metadata for each of the blog, so that it has a more comprehensible and
        appealing appearance when they are being shared on social media.
      </p>
      <p>
        Unlike previous portfolios I have created, I also put effort in
        improving the blog&apos; readability under page readers and scores
        evaluated by{" "}
        <a
          href="https://developer.chrome.com/docs/lighthouse/overview"
          target="_blank"
        >
          Lighthouse
        </a>
        .
      </p>
      <p>
        To ensure the feasibility of adding custom components in the blog posts,
        I chose to use{" "}
        <a href="https://github.com/hashicorp/next-mdx-remote" target="_blank">
          MDX Remote
        </a>{" "}
        to render the articles so I can embed React components in them.
      </p>

      <p>
        This work is prefixed with <i>TOP</i> as it&apos;s part of Travis&apos;
        Over-engineered Projects.{" "}
      </p>
    </ProjectDetailLayout>
  );
}
