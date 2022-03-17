import { getPostMetas } from "../../lib/mdx";

const BlogHomepage = ({ generalPosts, projectsPosts, toolsPosts }) => {
	return <div>Blogs</div>;
};

export const getStaticProps = async () => {
	const generalPosts: PostMeta[] = getPostMetas("general");
	const projectsPosts: PostMeta[] = getPostMetas("projects");
	const toolsPosts: PostMeta[] = getPostMetas("tools");

	return {
		props: { generalPosts, projectsPosts, toolsPosts },
	};
};

export default BlogHomepage;
