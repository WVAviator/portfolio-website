import sanityClient from "../../lib/sanity";

interface Props {}

const BlogHomepage = ({ posts }: Props) => {
	return <div className="page-container"></div>;
};

export const getStaticProps = async () => {
	const query = `
	*[_type == "post"] | order(_createdAt desc) {
		title,
		slug,
		subtitle,
		mainImage,
	}
	`;

	const posts = await sanityClient.fetch(query);

	console.log(posts);

	return {
		props: {
			posts,
		},
		revalidate: 10,
	};
};

export default BlogHomepage;
