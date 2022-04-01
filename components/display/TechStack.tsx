import Image from "next/image";
import Link from "next/link";
import { Technology } from "../../types";
import SanityImage from "../sanity/SanityImage";
import TechLogo from "./TechLogo";

interface Props {
	techStack: Technology[];
	headerText?: string;
}

const TechStack = ({
	techStack,
	headerText = "Related Technologies",
}: Props) => {
	return (
		<div className="prose prose-sm flex flex-col items-center gap-6">
			<h2>{headerText}</h2>
			<div className="flex flex-wrap gap-6 justify-center items-center">
				{techStack.map((tech) => {
					return (
						<TechLogo
							technology={tech}
							key={tech.slug.current}
							className="w-24 h-24 shadow-md hover:shadow-lg"
						/>
					);
				})}
			</div>
		</div>
	);
};
export default TechStack;
