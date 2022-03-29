import Image from "next/image";
import Link from "next/link";
import { Technology } from "../../types";
import SanityImage from "../sanity/SanityImage";

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
						<Link
							key={tech.slug.current}
							href={`/technologies/${tech.slug.current}`}
						>
							<a className="w-24 h-24 shadow-md hover:shadow-lg cursor-pointer">
								<SanityImage source={tech.logo} />
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
export default TechStack;
