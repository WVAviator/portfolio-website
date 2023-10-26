import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import sanityClient from '../../lib/sanity';
import { BlogPost } from '../../types';
import Prose from '../../components/blog/Prose';
import Sidebar from '../../components/blog/Sidebar';
import TechStack from '../../components/display/TechStack';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  return (
    <div className="page-container">
      <div className="flex">
        <Prose post={post} />
        <Sidebar>
          <TechStack techStack={post.relatedTechnologies} />
        </Sidebar>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
	*[_type == "post" && slug.current == $slug][0] {
		title,
		description,
		slug,
		relatedTechnologies[]->{
			logo,
			slug
		},
		relatedProjects,
		header,
		mainImage,
		body,
		_updatedAt
	}
	`;

  const post: BlogPost = await sanityClient.fetch(query, {
    slug: params?.post,
  });

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
    fallback: 'blocking',
  };
};

export default BlogPostPage;
