import { projectsWithDetails, topProjects } from "@/services/projects";
import { ProjectPreview } from "./_components/project-preview";
import { TOPProjectPreview } from "./_components/top-project-preview/top-project-preview";

export default async function ProjectListPage() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 auto-rows-min bg-white dark:bg-slate-darker">
      <h1 className="col-span-full">Project list</h1>
      <h6 className="col-span-full mb-4 md:mb-8">
        Here you can find a list of notable projects I have worked on. I hope
        you will find some of them interesting!
      </h6>
      {projectsWithDetails.map((project) => (
        <ProjectPreview key={project.id} project={project} />
      ))}
      <section id="top" className="col-span-full mt-8 md:mt-16">
        <h3 className="font-bold pb-4 md:pb-8">
          Travis&apos; Over-engineered Projects
        </h3>
        <p>
          I have worked on a lot of projects, some of them are over-engineered
          and / or there are existing solutions for a similar problem. I decided
          to work on them anyways because of one or more of the following
          reasons:
        </p>
        <br />
        <ul>
          <li>I want to learn / practice my skills through building them</li>
          <li>
            I would like to keep personal data (expenditures, health data etc.)
            to myself.
          </li>
          <li>
            I would like to tailor-make some features that is not there just
            yet.
          </li>
          <li>I just feel like building new apps</li>
        </ul>
        <br />
        <p>
          I will assign them in a prefix of <code>TOP</code> to indicate that
          they are part of this collection.
        </p>
        <p>
          Since I have been working with microservices in my full-time jobs and
          I like this idea very much, I came up with a plan to connect several
          of my projects together through this pattern. As I have more and more
          hands-on experience with hosting / cloud / serverless providers like{" "}
          <i>Vercel</i> and <i>AWS</i>, the idea has come closer to reality ever
          before. I will keep you updated on this page when I have more to
          share.
        </p>
        <br />
        <p>
          For now, the <code>TOP</code> projects include:
        </p>
        <div className="flex flex-col gap-8 items-stretch">
          {topProjects.map((project) => (
            <TOPProjectPreview key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
