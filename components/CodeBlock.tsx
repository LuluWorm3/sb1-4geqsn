import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="my-4">
      <SyntaxHighlighter language={language} style={tomorrow} className="rounded-lg">
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;