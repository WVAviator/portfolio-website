import Link from 'next/link';
import { BlogPost } from '../../types';
import SanityImage from '../sanity/SanityImage';
import PostCard from './PostCard';

interface BlogHomeSectionProps {
  posts: BlogPost[];
}

const BlogHomeSection: React.FC<BlogHomeSectionProps> = ({ posts }) => {
  return (
    <section className="py-4">
      <ul className="flex flex-wrap justify-center lg:justify-start gap-3">
        {posts.map((post) => (
          <li
            key={post.slug.current}
            className="flex justify-center items-center"
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default BlogHomeSection;
