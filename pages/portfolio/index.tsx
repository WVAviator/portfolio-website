import sanityClient from '../../lib/sanity';
import ProjectPreview from '../../components/layout/ProjectPreview';
import { Project } from '../../types';
import { NextPage } from 'next';

interface ProjectHomePageProps {
  projects: Project[];
}

const ProjectHomePage: NextPage<ProjectHomePageProps> = ({ projects }) => {
  return (
    <div className="page-container">
      <h1 className="text-2xl my-8 dark:pen-drawn-dark pen-drawn">Projects</h1>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectPreview project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = `
	*[_type == "project"] | order(_updatedAt desc) {
		title,
		slug,
    _id,
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

export default ProjectHomePage;
