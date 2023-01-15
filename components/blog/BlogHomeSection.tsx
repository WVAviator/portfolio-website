import Link from 'next/link';
import { BlogPost } from '../../types';
import SanityImage from '../sanity/SanityImage';
import PostCard from './PostCard';

interface BlogHomeSectionProps {
  posts: BlogPost[];
}

const BlogHomeSection: React.FC<BlogHomeSectionProps> = ({ posts }) => {
  return (
    <section className="p-4">
      <ul className="flex gap-2">
        {posts.map((post) => (
          <li key={post.slug.current}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default BlogHomeSection;
