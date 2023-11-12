import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import sanityClient from '../../lib/sanity';
import { BlogPost } from '../../types';
import Prose from '../../components/blog/Prose';
import Sidebar from '../../components/blog/Sidebar';
import TechStack from '../../components/display/TechStack';
import { ArticleJsonLd, NextSeo } from 'next-seo';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  const images = [];
  post.mainImage &&
    images.push({
      url: post.mainImage.asset.url,
      width: 800,
      height: 600,
      alt: post.mainImage.alt,
    });

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`https://www.wvaviator.com/blog/${post.slug.current}`}
        openGraph={{
          type: 'website',
          url: `https://www.wvaviator.com/blog/${post.slug.current}`,
          title: post.title,
          description: post.description,
          images,
        }}
      />
      <ArticleJsonLd
        url={`https://www.wvaviator.com/blog/${post.slug.current}`}
        title={post.title}
        description={post.description}
        images={images.map((image) => image.url)}
        datePublished={post._createdAt}
        dateModified={post._updatedAt}
        authorName="Alexander Durham"
        publisherName="Alexander Durham"
        publisherLogo="https://www.wvaviator.com/images/logo.svg"
      />
      <div className="page-container">
        <div className="flex">
          <Prose post={post} />
          <Sidebar>
            <TechStack techStack={post.relatedTechnologies} />
          </Sidebar>
        </div>
      </div>
    </>
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
		mainImage{
      ...,
      asset->{
        ...,
        url
      }
    },
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
