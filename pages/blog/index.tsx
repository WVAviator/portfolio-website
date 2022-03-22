import sanityClient from "../../lib/sanity";
import { BlogPost } from "../../types";

interface Props {
	posts: BlogPost[];
}

const BlogHomepage = ({ posts }: Props) => {
	return (
		<div className="page-container">
			<BlogHomeSection posts={posts} />
		</div>
	);
};

export const getStaticProps = async () => {
	const query = `
	*[_type == "post"] | order(_updatedAt desc) {
		title,
		slug,
		description,
		mainImage,
	}
	`;

	const posts: BlogPost[] = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
		revalidate: 600,
	};
};

export default BlogHomepage;
