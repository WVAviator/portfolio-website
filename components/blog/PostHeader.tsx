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
    <div className="prose md:prose-lg lg:prose-xl prose-slate mb-10">
      <p>
        Updated <time>{formattedDate}</time>
      </p>
      <h1>{title}</h1>

      <div className="relative w-100 aspect-[2] rounded shadow-md overflow-hidden">
        {headerImage && <SanityImage source={headerImage} alt={title} />}
      </div>
    </div>
  );
};
export default PostHeader;
