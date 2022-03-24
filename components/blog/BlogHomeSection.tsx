import Link from "next/link";
import { BlogPost } from "../../types";
import SanityImage from "../sanity/SanityImage";
import PostCard from "./PostCard";

interface Props {
	posts: BlogPost[];
}

const BlogHomeSection = ({ posts }: Props) => {
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
