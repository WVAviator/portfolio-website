import BlogHomeSection from "../../components/blog/BlogHomeSection";
import { getPostMetas } from "../../lib/mdx";
import { PostMeta } from "../../lib/types/PostMeta";
import { getClient } from "../../lib/sanity";

interface Props {
	// generalPosts: PostMeta[];
	// projectsPosts: PostMeta[];
	// toolsPosts: PostMeta[];
}

const BlogHomepage = ({ post, preview }: Props) => {
	return (
		<div className="page-container">
			{/* <BlogHomeSection posts={projectsPosts} title="Projects" />
			<BlogHomeSection posts={toolsPosts} title="Tools" />
			<BlogHomeSection posts={generalPosts} title="General" /> */}
		</div>
	);
};



export const getStaticProps = async ({ params, preview = false }) => {
	
	const query = `
	*[_type == "post"] | order(_createdAt desc) {
	..., 
	author->,
	categories[]->
	}
	`;
	
	const post = await getClient(preview).fetch(query);

	return {
		props: {
			post,
			preview,
		},
		revalidate: 10,
	};
}

export default BlogHomepage;
