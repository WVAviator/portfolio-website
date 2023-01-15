import Link from 'next/link';
import { BlogPost } from '../../types';
import SanityImage from '../sanity/SanityImage';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedUpdateAt = new Date(post._updatedAt).toLocaleDateString();

  return (
    <Link
      aria-describedby={`description-${post.slug.current}`}
      aria-labelledby={`title-${post.slug.current}`}
      href={`/blog/${post.slug.current}`}
      className="flex flex-col aspect-[0.85] max-w-[21rem] p-4 border rounded shadow-md bg-primary-50  hover:shadow-lg transition-shadow duration-200"
    >
      <div className="relative  aspect-[16/10] shadow-inner border rounded overflow-hidden">
        <SanityImage
          source={post.mainImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={post.title}
        />
      </div>

      <h2
        id={`title-${post.slug.current}`}
        className="text-md text-center font-semibold xsm:text-left xsm:text-lg"
      >
        {post.title}
      </h2>

      <p
        id={`description-${post.slug.current}`}
        className="text-center text-sm xsm:text-left xsm:text-base my-3"
      >
        {post.description}
      </p>
      <p className="mt-auto text-center text-xs xsm:text-left xsm:text-sm">
        Last updated {formattedUpdateAt}
      </p>
    </Link>
  );
};
export default PostCard;
