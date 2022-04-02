import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
	language: string;
	children: React.ReactNode;
}

const Code = ({ language, children }: Props) => {
	return (
		<SyntaxHighlighter
			// customStyle={{
			// 	width: "min(85vw, 100%)",
			// 	margin: "0",
			// }}
			language={language || "javascript"}
			style={tomorrowNight}
		>
			{children}
		</SyntaxHighlighter>
	);
};
export default Code;
