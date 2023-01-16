import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { Project } from '../../types';
import SanityImage from '../sanity/SanityImage';
import Laptop from './Laptop';
import Smartphone from './Smartphone';

type ProjectLinkType = 'portfolio' | 'github' | 'published';
interface ProjectShowcaseProps {
  project: Project;
  alternateTitle?: string;
  linkType?: ProjectLinkType;
}

const ProjectShowcase: NextPage<ProjectShowcaseProps> = ({
  project,
  alternateTitle,
  linkType = 'portfolio',
}) => {
  const linkUrl = {
    portfolio: `/portfolio/${project.slug.current}`,
    github: project.githubUrl,
    published: project.projectUrl,
  }[linkType];
  return (
    <Link href={linkUrl} className="prose prose-sm flex flex-col items-center">
      <h2 className="pen-drawn">{alternateTitle || project.title}</h2>
      <div className="lg:p-6 relative flex flex-col items-center cursor-pointer transition-transform hover:scale-105 duration-200 not-prose">
        {project.desktopView && (
          <Laptop className="max-w-[100%]">
            <SanityImage source={project.desktopView} alt={project.title} />
          </Laptop>
        )}
        {project.mobileView && (
          <div className="absolute left-[11%] top-[38%]">
            <Smartphone className="max-w-[23%]">
              <SanityImage source={project.mobileView} alt={project.title} />
            </Smartphone>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectShowcase;
