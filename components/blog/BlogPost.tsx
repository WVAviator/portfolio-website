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
			<SanityImage sanityImage={value as SanityImageAsset} />
		),
	},
	marks: {
		link: ({ children, value }) => (
			<SanityLink value={value} children={children} />
		),
	},
};

const Prose = ({ post }: Props) => {
	return (
		<article className="prose md:prose-lg lg:prose-xl prose-slate">
			<PostHeader updated={post._updatedAt} title={post.title} />

			<PortableText value={post.body} components={components} />
		</article>
	);
};

export default Prose;
