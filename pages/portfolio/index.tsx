import sanityClient from "../../lib/sanity";
import { Project } from "../../types";

interface Props {
	projects: Project[];
}

const ProjectHomepage = ({ projects }: Props) => {
	return <div className="page-container"></div>;
};

export const getStaticProps = async () => {
	const query = `
	*[_type == "project"] | order(_updatedAt desc) {
		title,
		slug,
		description,
		desktopView,
        mobileView,
        projectUrl,
        githubUrl,
		_updatedAt
	}
	`;

	const projects: Project[] = await sanityClient.fetch(query);

	return {
		props: {
			projects,
		},
		revalidate: 600,
	};
};

export default ProjectHomepage;
