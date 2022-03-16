import { getPostMetas } from "../../lib/mdx";

const BlogHomepage = ({ generalPosts, projectsPosts, toolsPosts }) => {

}

export const getStaticProps = async () => {
    const generalPosts: PostMeta[] = getPostMetas("general");
    const projectsPosts: PostMeta[] = getPostMetas("projects");
    const toolsPosts: PostMeta[] = getPostMetas("tools");

    return {
        props: {generalPosts, projectsPosts, toolsPosts},
        revalidate: 86400,
    }
}

export default BlogHomepage;