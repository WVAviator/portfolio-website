import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXLink from "../../components/mdx/MDXLink";
import MDXImage from "../../components/mdx/MDXImage";

interface Props {
	postData: MDXRemoteSerializeResult;
}

const components = {
	a: (props: any) => <MDXLink {...props} />,
	img: (props: any) => <MDXImage {...props} />,
	MDXImage,
};

const MDXPost = ({ postData }: Props) => {
	return (
		<article className="prose md:prose-lg lg:prose-xl prose-slate">
			<MDXRemote {...postData} components={components} />
		</article>
	);
};

export default MDXPost;
