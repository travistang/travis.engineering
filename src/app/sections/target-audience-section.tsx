import React from "react";
import { AboutSection } from "../components/about-section";

const TargetAudienceSection: React.FC = () => {
  return (
    <AboutSection
      anchor="target-audience"
      title="Who are your target audiences?"
      className="pt-16"
    >
      <p>
        If you&apos;re reading this, you are already the target audience!
        <br />
        You could be a prospective employer, a fellow developer, a friend, or my
        family member. I write these articles to share my thoughts, and they are
        open to whoever comes across them. I hope you find them useful or, at
        least, interesting!
      </p>
    </AboutSection>
  );
};

export default TargetAudienceSection;
