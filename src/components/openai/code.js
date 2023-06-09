import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeHighlight = ({ text }) => {
  // Create an array where odd indices will hold code and even indices will hold plain text
  const parts = (text || "").split("```");

  // console.log(text);
  return parts.map((part, index) => {
    // If the index is odd, this is a code block
    if (index % 2 === 1) {
      const lang = part.split("\n");
      let codePart = "";
      if (lang[0]) {
        console.log(`[${lang[0]}]`);
        const start = part.indexOf("\n");
        codePart = part.substr(start, part.length);
      }
      return (
        <SyntaxHighlighter
          key={index}
          language={lang[0]}
          lineProps={{
            style: {
              wordBreak: "break-all",
              whiteSpace: "pre-wrap",
              lineHeight: "1.0rem",
              fontSize: "1rem",
            },
          }}
          wrapLines={true}
          // showLineNumbers={true}
          style={vscDarkPlus}
        >
          {codePart}
        </SyntaxHighlighter>
      );
    } else {
      // This is a plain text block
      return <p className="text-sm py-4 whitespace-pre-wrap">{part}</p>;
    }
  });
};

export default CodeHighlight;
