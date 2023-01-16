import Link from 'next/link';
import { Project } from '../../types';
import Laptop from '../display/Laptop';
import Smartphone from '../display/Smartphone';
import SanityImage from '../sanity/SanityImage';
import Button from '../ui/Button';
import { WindowIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

interface ProjectPreviewProps {
  project: Project;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  return (
    <article className="flex flex-wrap gap-10 md:flex-nowrap items-center justify-center shadow-lg bg-slate-100 py-6 md:max-h-[19rem]">
      <div
        className={
          'px-8 text-center md:text-left md:w-[50%] flex flex-col gap-6'
        }
      >
        <Link
          href={`/portfolio/${project.slug.current}`}
          className="md:max-w-fit"
        >
          <h2 className="text-xl  hover:text-cyan-400">{project.title}</h2>
        </Link>
        <p className="text-sm max-w-full">{project.description}</p>
        <div className="flex flex-col md:flex-row gap-6 mx-auto md:mx-0">
          <Button
            href={project.projectUrl}
            className="btn btn-primary"
            endIcon={<WindowIcon />}
          >
            <span>Published Project</span>
          </Button>
          <Button
            href={project.githubUrl}
            className="btn btn-primary"
            endIcon={<CodeBracketIcon />}
          >
            <span>GitHub Repo</span>
          </Button>
        </div>
      </div>
      <Link
        href={`/portfolio/${project.slug.current}`}
        className="group transition-transform hover:scale-105 duration-200"
      >
        <div className="p-6 lg:p-6 flex flex-col items-center w-[20rem] cursor-pointer  max-h-[13rem] ">
          {project.desktopView && (
            <Laptop className="max-w-[100%]">
              <SanityImage source={project.desktopView} alt={project.title} />
            </Laptop>
          )}
          {project.mobileView && (
            <Smartphone className="max-w-[20%] -translate-y-[110%] -translate-x-[180%]">
              <SanityImage source={project.mobileView} alt={project.title} />
            </Smartphone>
          )}
        </div>
        <p className="text-center group-hover:text-cyan-400">Read More</p>
      </Link>
    </article>
  );
};

export default ProjectPreview;
