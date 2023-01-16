import Image from 'next/image';
import { SanityImageAsset } from '../../types';
import SanityImage from '../sanity/SanityImage';

interface PostHeaderProps {
  updated: string;
  title: string;
  headerImage: SanityImageAsset;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  updated,
  title,
  headerImage,
}) => {
  const formattedDate = new Date(updated).toLocaleDateString();

  return (
    <div>
      <p>
        Updated <time>{formattedDate}</time>
      </p>
      <h1 className="pen-drawn">{title}</h1>

      <div className="relative w-100 aspect-[2] rounded shadow-md overflow-hidden not-prose">
        {headerImage && (
          <SanityImage source={headerImage} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
    </div>
  );
};
export default PostHeader;
