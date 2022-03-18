import { getPostMetas } from "../../lib/mdx";
import { PostMeta } from "../../lib/types/PostMeta";

interface Props {
	generalPosts: PostMeta[];
	projectsPosts: PostMeta[];
	toolsPosts: PostMeta[];
}

const BlogHomepage = ({ generalPosts, projectsPosts, toolsPosts }: Props) => {
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
