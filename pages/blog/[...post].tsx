import { getPostData, getAllStaticPaths } from "../../lib/mdx";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMeta } from "../../lib/types/PostMeta";
import { GetStaticPaths, GetStaticProps } from "next";
import PostHeader from "../../components/blog/PostHeader";
import MDXPost from "../../components/mdx/MDXPost";

interface Props {
	postMeta: PostMeta;
	postData: MDXRemoteSerializeResult;
}

const Post = ({ postMeta, postData }: Props) => {
	return (
		<div className="page-container">
			<section>
				<PostHeader postMeta={postMeta} />
			</section>
			<section>
				<MDXPost postData={postData} />
			</section>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const path = params?.post;
	if (!path || path.length !== 2) {
		return { props: { postMeta: {}, postData: {} } };
	}

	const category = path[0];
	const slug = path[1];

	const post = await getPostData(category, slug);

	const components = {};

	return {
		props: {
			...post,
		},
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: getAllStaticPaths(),
		fallback: false,
	};
};

export default Post;
