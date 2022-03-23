import sanityClient from "../lib/sanity";
import type { GetStaticProps, NextPage } from "next";
import Hero from "../components/page-sections/Hero/Hero";
import { Technology } from "../types";

interface Props {
	technologies: Technology[];
}

const Home = ({ technologies }: Props) => {
	return (
		<>
			<Hero desktopImages={technologies.map((tech) => tech.logo)} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const query = `
	*[_type == "technology"] | {
		logo, 
	}
	`;

	const technologies: Technology[] = await sanityClient.fetch(query);

	return {
		props: { technologies },
	};
};

export default Home;
