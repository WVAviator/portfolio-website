import Link from "next/link";
import { Technology } from "../../types";
import SanityImage from "../sanity/SanityImage";

interface Props {
	technology: Technology;
	className?: string;
}

const TechLogo = ({ technology, className = "p-6 w-36 h-36" }: Props) => {
	return (
		<Link href={`/technology/${technology.slug.current}`}>
			<a>
				<div
					className={`flex items-center justify-center relative hover:scale-110 transition-transform duration-200 cursor-pointer ${className}`}
				>
					<SanityImage source={technology.logo} layout="fill" />
				</div>
			</a>
		</Link>
	);
};
export default TechLogo;
