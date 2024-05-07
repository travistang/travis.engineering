import "highlight.js/styles/atom-one-dark.css";
import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function code(
  props: ClassAttributes<HTMLElement> & ExtraProps & HTMLAttributes<HTMLElement>
) {
  const { children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <>
      {/* @ts-ignore */}
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        language={match[1]}
        style={theme}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
}
