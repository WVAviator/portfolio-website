import { GetStaticPaths, GetStaticProps } from "next";
import PostHeader from "../../components/blog/PostHeader";
import sanityClient from "../../lib/sanity";
import { BlogPost } from "/types";
import SanityImage from "../../components/sanity/SanityImage";
import SanityLink from "../../components/sanity/SanityLink";

interface Props {
	post: BlogPost;
}

const components = {
	types: {
		image: ({value}) => <SanityImage sanityImage={value} />,
	},
	marks: {
		link: ({children, value}) => <SanityLink value={value} children={children} />,
	}
}

const Post = ({ post }: Post) => {
	return (
		<div className="page-container">
			<section>
				<PostHeader updated={post._updatedAt} title={post.title} />
			</section>
			<section>
				<PortableText value={post.body} components={components} />
			</section>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = `
	*[_type == "post" && slug.current == $slug][0] {
		title,
		description,
		slug,
		techStack,
		header,
		mainImage,
		publishedAt,
		body
	}
	`;

	const post: BlogPost = await sanityClient.fetch(query, { slug: params.post });
	
	return {
		props: { post },
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	const query = `
	*[_type == "post"] {
		slug,
	}
	`;

	const posts: BlogPost[] = await sanityClient.fetch(query);
	const paths = posts.map(({ slug }) => {
		return {
			params: {
				post: slug.current,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export default Post;
