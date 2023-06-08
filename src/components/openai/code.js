import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeHighlight = ({ text }) => {
  // Create an array where odd indices will hold code and even indices will hold plain text
  const parts = (text || "").split("```");

  // console.log(text);
  return parts.map((part, index) => {
    // If the index is odd, this is a code block
    if (index % 2 === 1) {
      return (
        <SyntaxHighlighter
          key={index}
          language="javascript"
          lineProps={{
            style: {
              // wordBreak: "break-all",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              lineHeight: "2rem",
            },
          }}
          wrapLines={true}
          showLineNumbers={true}
          style={vscDarkPlus}
        >
          {part}
        </SyntaxHighlighter>
      );
    } else {
      // This is a plain text block
      return <p className="text-sm py-4 whitespace-pre-wrap">{part}</p>;
    }
  });
};

export default CodeHighlight;
