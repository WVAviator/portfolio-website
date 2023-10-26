import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import sanityClient from '../../lib/sanity';
import { Project } from '../../types';
import Prose from '../../components/blog/Prose';
import Sidebar from '../../components/blog/Sidebar';
import TechStack from '../../components/display/TechStack';
import Laptop from '../../components/display/Laptop';
import SanityImage from '../../components/sanity/SanityImage';
import Smartphone from '../../components/display/Smartphone';
import ProjectShowcase from '../../components/display/ProjectShowcase';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <div className="page-container">
      <div className="flex">
        <Prose post={project} />
        <Sidebar>
          <ProjectShowcase project={project} alternateTitle="View Project" linkType="published" />
          <hr className="mb-6" />
          <TechStack techStack={project.techStack} headerText="Tech Stack" />
        </Sidebar>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
	*[_type == "project" && slug.current == $slug][0] {
		title,
		description,
		slug,
		techStack[]->{
			logo,
			slug
		},
		header,
        mobileView,
        desktopView,
		projectUrl,
		githubUrl,
		body,
		_updatedAt
	}
	`;

  const project: Project = await sanityClient.fetch(query, {
    slug: params?.project,
  });

  return {
    props: { project },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
	*[_type == "project"] {
		slug,
	}
	`;

  const projects: Project[] = await sanityClient.fetch(query);
  const paths = projects.map(({ slug }) => {
    return {
      params: {
        project: slug.current,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export default ProjectPage;
