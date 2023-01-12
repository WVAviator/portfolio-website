import Image from 'next/image';
import Link from 'next/link';
import { Technology } from '../../types';
import SanityImage from '../sanity/SanityImage';

interface TechLogoProps {
	technology: Technology;
	className?: string;
	useSVG?: boolean;
}

const TechLogo: React.FC<TechLogoProps> = ({
	technology,
	className = 'w-36 h-36',
	useSVG = false,
}) => {
	return (
		<Link href={`/technology/${technology.slug.current}`}>
			<a>
				<div
					className={`flex items-center justify-center relative hover:scale-110 transition-transform duration-200 cursor-pointer p-6 ${className}`}
				>
					{useSVG ? (
						<Image
							src={`/images/technologies/${technology.slug.current}.svg`}
							alt={`Logo for ${technology.title}`}
							layout="fill"
							lazyBoundary="200%"
						/>
					) : (
						<SanityImage source={technology.logo} layout="fill" />
					)}
				</div>
			</a>
		</Link>
	);
};
export default TechLogo;
