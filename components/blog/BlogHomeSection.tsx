import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "../../lib/types/PostMeta";

interface Props {
	title: string;
	posts: PostMeta[];
}

const BlogHomeSection = ({ title, posts }: Props) => {
	return (
		<section className="p-4">
			<h1 className="text-xl font-semibold">{title}</h1>
			<ul className="flex gap-2 ">
				{posts.map((post) => (
					<li key={post.slug}>
						<Link href={`/blog/${post.category}/${post.slug}`} key={post.slug}>
							<a>
								<h2 className="text-l font-semibold">{post.title}</h2>
								<div className="relative w-36 h-36">
									<Image
										src={post.cardImageUrl}
										layout="fill"
										objectFit="contain"
										objectPosition="center"
									/>
								</div>
								<p>{post.description}</p>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
export default BlogHomeSection;