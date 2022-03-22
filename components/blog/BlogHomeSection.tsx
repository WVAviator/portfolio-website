import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../../types";

interface Props {
	posts: BlogPost[];
}

const BlogHomeSection = ({ posts }: Props) => {
	return (
		<section className="p-4">
			<ul className="flex gap-2">
				{posts.map((post) => (
					<li key={post.slug.current}>
						<Link href={`/blog/${post.slug.current}`}>
							<a>
								<h2 className="text-l font-semibold">{post.title}</h2>
								<div className="relative w-36 h-36">
									<SanityImage
										sanityImage={post.mainImage}
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
