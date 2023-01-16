import sanityClient from '../lib/sanity';
import type { GetStaticProps, NextPage } from 'next';
import Hero from '../components/page-sections/Hero/Hero';
import { Project, Technology } from '../types';
import Banner from '../components/display/Banner';
import SanityImage from '../components/sanity/SanityImage';
import Link from 'next/link';
import TechLogo from '../components/display/TechLogo';
import Image from 'next/image';
import FlexLayout from '../components/layout/FlexLayout';
import ContactForm from '../components/ui/ContactForm';

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-[40rem] mb-12 pen-drawn">
            Leveraging cutting-edge technologies to deliver scalable,
            high-performance applications
          </h1>
        </div>
        <Banner className="h-28 md:h-28 lg:h-36">
          {technologies.map((technology) => (
            <TechLogo
              key={technology.slug.current}
              technology={technology}
              className="w-28 h-28 lg:w-36 lg:h-36"
              useSVG
            />
          ))}
        </Banner>
      </section>
      <section>
        <FlexLayout className="relative">
          <div className="flex justify-center items-center h-[300px] w-[300px] old-paper">
            <div className="clip h-[300px] w-[300px]">
              <Image
                src="/images/headshot.jpg"
                alt="Alexander Durham"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center min-w-[200px]">
            <h2 className="mb-6 text-2xl font-medium w-full text-center md:text-left pen-drawn">
              About Me
            </h2>
            <p className="prose">
              I am a software engineer transitioning from a career in airline
              management. I am a fast and enthusiastic learner with excellent
              creative problem-solving skills. I am passionate about full-stack
              development, game development, and computer science. I am open to
              new opportunities and would love to hear from you.
            </p>
          </div>
        </FlexLayout>
      </section>
      <section>
        <FlexLayout>
          <ContactForm />
        </FlexLayout>
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
