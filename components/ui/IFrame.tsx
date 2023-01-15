import Link from 'next/link';
import { CSSProperties, DetailedHTMLProps, IframeHTMLAttributes } from 'react';
import { SanityImageAsset } from '../../types';
import Laptop from '../display/Laptop';
import SanityImage from '../sanity/SanityImage';

interface IFrameProps
  extends DetailedHTMLProps<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  > {
  altImage: SanityImageAsset;
}

const IFrame: React.FC<IFrameProps> = ({ altImage, ...rest }) => {
  return (
    <>
      <div className="hidden sm:block shadow-md rounded overflow-hidden w-full aspect-[1.61]">
        <iframe className="w-full h-full" {...rest} />
      </div>
      <Link href={rest.src ?? '#'}>
        <Laptop className="sm:hidden">
          <SanityImage source={altImage} alt={altImage.alt || ''} />
        </Laptop>
      </Link>
    </>
  );
};
export default IFrame;
