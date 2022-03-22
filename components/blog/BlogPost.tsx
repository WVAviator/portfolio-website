import { SanityPost } from "../../types";
import { SanityImage } from "../sanity/SanityImage";
import { SanityLink } from "../sanity/SanityLink";
import { PostHeader } from "./PostHeader";
import { PortableText } from '@portabletext/react'

interface Props {
	post: SanityPost;
}

const components = {
	types: {
		image: ({value}) => <SanityImage sanityImage={value} />,
	},
	marks: {
		link: ({children, value}) => <SanityLink value={value} children={children} />,
	}
}

const BlogPost = ({ post }: Props) => {
	return (
		<article className="prose md:prose-lg lg:prose-xl prose-slate">

				<PostHeader updated={post._updatedAt} title={post.title} />

				<PortableText value={post.body} components={components} />
			
		</article>
	);
};

export default BlogPost;
