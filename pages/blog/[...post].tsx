import { getPostData, getAllStaticPaths } from "../../lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMeta } from "../../lib/types/PostMeta";
import Image from "next/image";
import MDXLink from "../../components/mdx/MDXLink";

interface Props {
    postMeta: PostMeta;
    postData: MDXRemoteSerializeResult;
}

const mdxComponents = {
    a: MDXLink,
    Image
}

const Post = ({ postMeta, postData }) => {
	return (
    <>
        <section>
            <h1>{postMeta.title}</h1>
            <p>Updated <time>{postMeta.dateUpdated}</time></p>
        </section>
        <section>
            <MDXRemote {...postData} components={mdxComponents} />
        </section>
    </>
    );
};

export const getStaticProps = ({ params }) => {
    const post = await getPostData(params.post[0], params.post[1]);
    return {
        props: {
            ...post
        }
    }
}

export const getStaticPaths = () => getAllStaticPaths();

export default Post;
