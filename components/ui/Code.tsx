import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeProps {
  language: string;
  children: string;
}

const Code: React.FC<CodeProps> = ({ language, children }) => {
  return (
    <SyntaxHighlighter
      language={language || 'javascript'}
      style={tomorrowNight}
    >
      {children}
    </SyntaxHighlighter>
  );
};
export default Code;
