import { FaExclamationTriangle } from "react-icons/fa";
import Markdown from "react-markdown";

type Props = {
  prerequisitesMarkdown: string[];
};
export const PrerequisiteSection = ({ prerequisitesMarkdown }: Props) => {
  return (
    <section className="rounded-lg p-2 flex flex-col items-stretch gap-2 bg-accent-yellow/20">
      <span className="flex items-center gap-2 bg-transparent">
        <FaExclamationTriangle className="text-yellow" />
        Prerequisites
      </span>
      <p>I assume you know the following before reading this article:</p>
      <ul className="list-disc list-inside">
        {prerequisitesMarkdown.map((markdown) => (
          <li key={markdown}>
            <Markdown>{markdown}</Markdown>
          </li>
        ))}
      </ul>
    </section>
  );
};
