import { NextPage } from 'next';
import BlogHomeSection from '../../components/blog/BlogHomeSection';
import sanityClient from '../../lib/sanity';
import { BlogPost } from '../../types';

interface BlogHomePageProps {
	posts: BlogPost[];
}

const BlogHomePage: NextPage<BlogHomePageProps> = ({ posts }) => {
	return (
		<div className="page-container">
			<BlogHomeSection posts={posts} />
		</div>
	);
};

export const getStaticProps = async () => {
	const query = `
	*[_type == "post"] | order(_updatedAt desc) {
		title,
		slug,
		description,
		mainImage,
		_updatedAt
	}
	`;

	const posts: BlogPost[] = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
		revalidate: 600,
	};
};

export default BlogHomePage;
