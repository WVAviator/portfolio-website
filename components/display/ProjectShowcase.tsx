import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { Project } from '../../types';
import SanityImage from '../sanity/SanityImage';
import Laptop from './Laptop';
import Smartphone from './Smartphone';

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: NextPage<ProjectShowcaseProps> = ({ project }) => {
  return (
    <Link href={`/portfolio/${project.slug.current}`}>
      <h3 className="text-center text-lg">{project.title}</h3>
      <div className="lg:p-6 relative flex flex-col items-center cursor-pointer transition-transform hover:scale-105 duration-200">
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
