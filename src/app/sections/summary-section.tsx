import { ROUTE_BLOGS } from "@/constants/route";
import { AboutSection } from "../components/about-section";

export const SummarySection = () => {
  return (
    <AboutSection anchor="main-content" title="About me">
      <p>
        I am Travis, a full-stack engineer from Hong Kong who specializes in
        React.js, Node.js, and TypeScript - though I try my best to expand my
        skill set by actively learning and applying new technologies to
        different projects.
      </p>
      <p>
        I am enthusiastic about DIY stuff, particularly the design of solid
        parts and realizing them with 3D printing. I also spend a lot of my free
        time doing personal projects that I find useful for (mostly) myself,
        including my own{" "}
        <a href="/projects/top-nutrition-app">nutrition tracking app</a>,{" "}
        <a href="/projects/top-departure-dashboard">
          public transport dashboard
        </a>
        , and quite a few more. For those where there are existing solutions for
        a similar problem or things that can just be done with a few extra
        clicks (and maybe pen or paper), I would group them in a collection of
        my projects called{" "}
        <a href="/projects/#top">Travis&apos; Over-engineered Projects</a>.
      </p>
      <p>
        Besides work and coding, I spend a lot of time working out. I enjoy
        exercises related to mountains, like hiking, trail running, bouldering,
        and I&apos;m frequently lifting weights as well. Therefore, I write{" "}
        <a href={ROUTE_BLOGS}>articles</a> about not only software and DIY but
        also sports I usually do. So stay tuned!
      </p>
    </AboutSection>
  );
};
