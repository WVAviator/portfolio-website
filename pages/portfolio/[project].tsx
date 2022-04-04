import { GetStaticPaths, GetStaticProps } from "next";
import sanityClient from "../../lib/sanity";
import { Project } from "../../types";
import Prose from "../../components/blog/Prose";
import Sidebar from "../../components/blog/Sidebar";
import TechStack from "../../components/display/TechStack";
import Laptop from "../../components/display/Laptop";
import SanityImage from "../../components/sanity/SanityImage";
import Link from "next/link";
import Smartphone from "../../components/display/Smartphone";

interface Props {
	project: Project;
}

const Project = ({ project }: Props) => {
	return (
		<div className="page-container">
			<div className="flex">
				<Prose post={project} />
				<Sidebar>
					{project.desktopView && (
						<Link href={project.projectUrl ?? "#"}>
							<a>
								<Laptop>
									<SanityImage source={project.desktopView} />
								</Laptop>
							</a>
						</Link>
					)}
					{project.mobileView && (
						<Link href={project.projectUrl ?? "#"}>
							<a>
								<Smartphone>
									<SanityImage source={project.mobileView} />
								</Smartphone>
							</a>
						</Link>
					)}
					<TechStack
						techStack={project.techStack}
						headerText="Tech Stack"
					/>
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

export default Project;
