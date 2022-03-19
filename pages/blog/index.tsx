import BlogHomeSection from "../../components/blog/BlogHomeSection";
import { getPostMetas } from "../../lib/mdx";
import { PostMeta } from "../../lib/types/PostMeta";

interface Props {
	generalPosts: PostMeta[];
	projectsPosts: PostMeta[];
	toolsPosts: PostMeta[];
}

const BlogHomepage = ({ generalPosts, projectsPosts, toolsPosts }: Props) => {
	return (
		<div>
			<BlogHomeSection posts={generalPosts} title="General" />
			<BlogHomeSection posts={projectsPosts} title="Projects" />
			<BlogHomeSection posts={toolsPosts} title="Tools" />
		</div>
	);
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
