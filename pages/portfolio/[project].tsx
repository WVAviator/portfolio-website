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
import { ArticleJsonLd, NextSeo } from 'next-seo';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <NextSeo
        title={project.title}
        description={project.description}
        canonical={`https://www.wvaviator.com/portfolio/${project.slug.current}`}
        openGraph={{
          type: 'website',
          url: `https://www.wvaviator.com/portfolio/${project.slug.current}`,
          title: project.title,
          description: project.description,
          images: [
            {
              url: project.desktopView.asset.url,
              width: 800,
              height: 450,
              alt: project.desktopView.alt,
            },
            {
              url: project.mobileView.asset.url,
              width: 300,
              height: 500,
              alt: project.mobileView.alt,
            },
            {
              url: project.header.asset.url,
              width: 800,
              height: 600,
              alt: project.header.alt,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://www.wvaviator.com/portfolio/${project.slug.current}`}
        title={project.title}
        description={project.description}
        images={[
          project.desktopView.asset.url,
          project.mobileView.asset.url,
          project.header.asset.url,
        ]}
        datePublished={project._createdAt}
        dateModified={project._updatedAt}
        authorName="Alexander Durham"
        publisherName="Alexander Durham"
        publisherLogo="https://www.wvaviator.com/images/logo.svg"
      />
      <div className="page-container">
        <div className="flex">
          <Prose post={project} />
          <Sidebar>
            <ProjectShowcase
              project={project}
              alternateTitle="View Project"
              linkType="published"
            />
            <hr className="mb-6" />
            <TechStack techStack={project.techStack} headerText="Tech Stack" />
          </Sidebar>
        </div>
      </div>
    </>
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
		header{
      ...,
      asset->{
        ...,
        url
      }
    },
    mobileView{
      ...,
      asset->{
        ...,
        url
      }
    },
    desktopView{
      ...,
      asset->{
        ...,
        url
      }
    },
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
    fallback: false,
  };
};

export default ProjectPage;
