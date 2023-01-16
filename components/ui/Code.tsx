import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeProps {
  language: string;
  children: string;
}

const Code: React.FC<CodeProps> = ({ language, children }) => {
  return (
    <div className="not-prose text-sm rounded-md shadow-lg overflow-y-hidden overflow-x-hidden">
      <SyntaxHighlighter
        wrapLongLines
        language={language || 'javascript'}
        style={tomorrowNight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
export default Code;
