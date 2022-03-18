import { getPostData, getAllStaticPaths } from "../../lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMeta } from "../../lib/types/PostMeta";
import Image from "next/image";
import MDXLink from "../../components/mdx/MDXLink";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
	postMeta: PostMeta;
	postData: MDXRemoteSerializeResult;
}

const components = {
	a: MDXLink,
	img: Image,
	Image,
};

const Post = ({ postMeta, postData }: Props) => {
	const formattedDate = new Date(postMeta.dateUpdated).toLocaleDateString(
		"en-US"
	);

	return (
		<>
			<section>
				<div className="page-container">
					<div className="relative hidden md:block float-left w-12 aspect-[1]">
						<Image src={postMeta.imageUrl} alt={postMeta.title} layout="fill" />
					</div>
					<h1 className="text-lg font-semibold">{postMeta.title}</h1>

					<p>
						Updated <time>{formattedDate}</time>
					</p>
				</div>
			</section>
			<section>
				<div className="page-container">
					<MDXRemote {...postData} components={components} />
				</div>
			</section>
		</>
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
