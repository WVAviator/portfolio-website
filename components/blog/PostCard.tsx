import Link from 'next/link';
import { BlogPost } from '../../types';
import SanityImage from '../sanity/SanityImage';

const DESCRIPTION_CHARACTER_LIMIT = 180;

interface PostCardProps {
	post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const formattedUpdateAt = new Date(post._updatedAt).toLocaleDateString();

	let truncatedDescription = post.description;
	if (post.description.length > DESCRIPTION_CHARACTER_LIMIT) {
		// set the truncated description to the first 100 characters but also don't cut off the middle of a word
		truncatedDescription =
			post.description
				.slice(0, DESCRIPTION_CHARACTER_LIMIT)
				.split(' ')
				.slice(0, -1)
				.join(' ') + '...';
	}

	return (
		<Link
			aria-describedby={`description-${post.slug.current}`}
			aria-labelledby={`title-${post.slug.current}`}
			href={`/blog/${post?.slug?.current ?? '#'}`}
			className="flex flex-col aspect-[0.85] min-w-[15rem] w-[90%] max-w-[21rem] sm:w-[21rem] xsm:h-[30rem] p-4 border rounded shadow-md bg-primary-50  hover:shadow-lg transition-shadow duration-200"
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
				className="text-md text-center font-semibold xsm:text-left xsm:text-lg mt-4"
			>
				{post.title}
			</h2>

			<p
				id={`description-${post.slug.current}`}
				className="text-center text-sm xsm:text-left xsm:text-base my-3"
			>
				{truncatedDescription}
			</p>
			<p className="mt-auto text-center text-xs xsm:text-left xsm:text-sm">
				Last updated {formattedUpdateAt}
			</p>
		</Link>
	);
};
export default PostCard;
