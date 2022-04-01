import sanityClient from "../lib/sanity";
import type { GetStaticProps, NextPage } from "next";
import Hero from "../components/page-sections/Hero/Hero";
import { Project, Technology } from "../types";
import Banner from "../components/display/Banner";
import SanityImage from "../components/sanity/SanityImage";
import Link from "next/link";
import TechLogo from "../components/display/TechLogo";

interface Props {
	technologies: Technology[];
	projects: Project[];
}

const Home = ({ technologies, projects }: Props) => {
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
				<Banner className="min-h-36">
					{technologies.map((technology) => (
						<TechLogo
							key={technology.slug.current}
							technology={technology}
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
	const projectsResponse: Promise<Project[]> =
		sanityClient.fetch(projectQuery);

	const technologies = await technologiesResponse;
	const projects = await projectsResponse;

	return {
		props: { technologies, projects },
	};
};

export default Home;
