import { SanityImageAsset, SanityPost } from "../../types";
import SanityImage from "../sanity/SanityImage";
import SanityLink from "../sanity/SanityLink";
import PostHeader from "./PostHeader";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

interface Props {
	post: SanityPost;
}

const components: Partial<PortableTextReactComponents> = {
	types: {
		image: ({ value }) => (
			<div className="shadow-md rounded overflow-hidden">
				<SanityImage source={value as SanityImageAsset} />
			</div>
		),
	},
	marks: {
		link: ({ children, value }) => (
			<SanityLink value={value}>{children}</SanityLink>
		),
	},
};

const Prose = ({ post }: Props) => {
	return (
		<article className="prose md:prose-lg lg:prose-xl prose-slate prose-a:cursor-pointer hover:prose-a:text-primary-400 prose-a:transition-colors prose-a:duration-200">
			<PostHeader updated={post._updatedAt} title={post.title} />

			<PortableText value={post.body} components={components} />
		</article>
	);
};

export default Prose;
