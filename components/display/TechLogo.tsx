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
      <div
        className={`flex flex-col items-center justify-center relative hover:scale-110 transition-transform duration-200 cursor-pointer p-6 not-prose ${className}`}
      >
        {useSVG ? (
          <Image
            src={`/images/technologies/${technology.slug.current}.svg`}
            alt={`Logo for ${technology.title}`}
            fill
          />
        ) : (
          <SanityImage
            source={technology.logo}
            layout="fill"
            alt={technology.title}
          />
        )}
      </div>
    </Link>
  );
};
export default TechLogo;
