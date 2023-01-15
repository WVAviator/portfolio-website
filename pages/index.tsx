import sanityClient from '../lib/sanity';
import type { GetStaticProps, NextPage } from 'next';
import Hero from '../components/page-sections/Hero/Hero';
import { Project, Technology } from '../types';
import Banner from '../components/display/Banner';
import SanityImage from '../components/sanity/SanityImage';
import Link from 'next/link';
import TechLogo from '../components/display/TechLogo';

interface HomePageProps {
  technologies: Technology[];
  projects: Project[];
}

const HomePage: NextPage<HomePageProps> = ({ technologies, projects }) => {
  return (
    <>
      <Hero
        desktopImages={projects
          .filter((project) => project.desktopView)
          .reverse()
          .map((project) => project.desktopView)}
        mobileImages={projects
          .filter((project) => project.mobileView)
          .map((project) => project.mobileView)}
      />
      <section>
        <div className="w-full flex items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-[40rem] mb-12">
            Leveraging cutting-edge technologies to deliver high-performance
            websites and applications
          </h1>
        </div>
        <Banner className="h-20 md:h-28 lg:h-36">
          {technologies.map((technology) => (
            <TechLogo
              key={technology.slug.current}
              technology={technology}
              className="md:w-28 md:h-28 lg:w-36 lg:h-36"
              useSVG
            />
          ))}
        </Banner>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const technologyQuery = `
	*[_type == "technology"] | {
		logo,
		title,
		slug
	}
	`;
  const projectQuery = `
	*[_type == "project"] | order(publishedAt desc) {
		title,
		slug,
		desktopView,
		mobileView
	}`;

  const technologiesResponse: Promise<Technology[]> =
    sanityClient.fetch(technologyQuery);
  const projectsResponse: Promise<Project[]> = sanityClient.fetch(projectQuery);

  const technologies = await technologiesResponse;
  const projects = await projectsResponse;

  return {
    props: { technologies, projects },
  };
};

export default HomePage;
