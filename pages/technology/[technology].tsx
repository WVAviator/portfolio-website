import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Project, Technology } from '../../types';
import sanityClient from '../../lib/sanity';
import Prose from '../../components/blog/Prose';
import Sidebar from '../../components/blog/Sidebar';
import Link from 'next/link';
import ProjectShowcase from '../../components/display/ProjectShowcase';

interface TechnologyPageProps {
  technology: Technology;
  projects: Project[];
}

const TechnologyPage: NextPage<TechnologyPageProps> = ({
  technology,
  projects,
}) => {
  return (
    <div className="page-container">
      <div className="flex">
        <Prose post={technology} />
        <Sidebar>
          <h2 className="text-2xl pen-drawn mb-6 font-bold">
            {technology.title} Projects
          </h2>
          <ul>
            {projects.map((project, index) => (
              <>
                <li key={project.slug.current}>
                    <ProjectShowcase project={project} />
                </li>
                {index < projects.length - 1 && <hr className="mb-6" />}
              </>
            
            ))}
          </ul>
        </Sidebar>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const technologyQuery = `
  *[_type == "technology" && slug.current == $slug][0]`;
  const technology: Technology = await sanityClient.fetch(technologyQuery, {
    slug: params?.technology,
  });

  // Get a list of projects (their slug, title, and mobile/desktop views) that use this technology from sanity
  const projectsQuery = `
  *[_type == "project" && $technology in techStack[]->slug.current] {
    title,
    slug,
    mobileView,
    desktopView,
  }`;
  const projects: Project[] = await sanityClient.fetch(projectsQuery, {
    technology: params?.technology,
  });

  return {
    props: { technology, projects },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
  *[_type == "technology"] {
    slug,
  }
  `;
  const technologies: Technology[] = await sanityClient.fetch(query);
  const paths = technologies.map(({ slug }) => {
    return {
      params: {
        technology: slug.current,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default TechnologyPage;
