
import { PostMeta } from "../../lib/types/PostMeta";
import { GetStaticPaths, GetStaticProps } from "next";
import PostHeader from "../../components/blog/PostHeader";


interface Props {
	
}

const Post = () => {
	return (
		<div className="page-container">
			<section>

			</section>
			<section>

			</section>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	

	return {
		props: {

		},
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: false,
	};
};

export default Post;
