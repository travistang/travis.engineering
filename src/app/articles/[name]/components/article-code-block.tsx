import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
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
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={theme}
      />
    </>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
}
