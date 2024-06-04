import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  children: string;
  fileName: string;
  language?: string;
  showLineNumbers?: boolean;
  addedLines?: number[];
  deletedLines?: number[];
};

const ADDED_LINES_COLOR = "#a1e6af30";
const DELETED_LINES_COLOR = "#d61a6f30";

const getLineStyle =
  (addedLines: number[], deletedLines: number[]) => (lineNumber: number) => {
    let backgroundColor: string | undefined = undefined;
    if (addedLines.includes(lineNumber)) {
      backgroundColor = ADDED_LINES_COLOR;
    }
    if (deletedLines.includes(lineNumber)) {
      backgroundColor = DELETED_LINES_COLOR;
    }
    return {
      style: {
        width: "max-content",
        display: "block",
        backgroundColor,
      },
    };
  };

export const CodeWithFileName = ({
  language,
  showLineNumbers,
  children,
  fileName,
  addedLines = [],
  deletedLines = [],
}: Props) => {
  return (
    <div className="rounded-lg flex flex-col items-stretch overflow-hidden">
      <span className="font-mono text-sm text-slate-lighter rounded-t-lg p-2 bg-slate-darker">
        {fileName}
      </span>
      <SyntaxHighlighter
        wrapLines
        wrapLongLines
        style={theme}
        customStyle={{ margin: 0, borderRadius: 0 }}
        language={language}
        showLineNumbers={showLineNumbers}
        lineProps={getLineStyle(addedLines, deletedLines)}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
