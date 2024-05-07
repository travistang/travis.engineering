import { AboutSection } from "../components/about-section";

export const TOPSection = () => {
  return (
    <AboutSection
      anchor="top"
      title="TOP - Travis' Over-engineered Projects"
      className="pt-16"
    >
      <p>
        The <b> Travis&apos; Over-engineered Projects</b> - or <b>TOP</b> in
        short, is initially just a prefix I assign to a bunch of projects that I
        feel like I am sort of reinventing the wheel (yet I do it anyways as a
        practice, a mean of learning new technologies and for my passion of
        building stuff). The themes of these project are mostly about my
        day-to-day life. Later on as I entered the world of microservices during
        my full time job I came up with the idea of connecting different apps I
        created together by sharing data stored within the app. So now it&apos;s
        a bunch of microservices and isolated apps that I created to make my
        life easier while not handing over my own data to third-parties.
      </p>
    </AboutSection>
  );
};
