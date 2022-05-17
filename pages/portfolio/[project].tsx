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
					<a
						className="group transition-transform hover:scale-105 duration-200"
						href={project.projectUrl}
					>
						<div className="p-6 lg:p-6 flex flex-col items-center w-[24rem] cursor-pointer  max-h-[16rem] ">
							{project.desktopView && (
								<Laptop className="max-w-[100%]">
									<SanityImage
										source={project.desktopView}
										alt={project.title}
									/>
								</Laptop>
							)}
							{project.mobileView && (
								<Smartphone className="max-w-[20%] -translate-y-[110%] -translate-x-[180%]">
									<SanityImage
										source={project.mobileView}
										alt={project.title}
									/>
								</Smartphone>
							)}
						</div>
						<p className="text-center mt-2 group-hover:text-cyan-400">
							View Project
						</p>
					</a>
					<div className="h-[1px] bg-slate-200 w-[90%] my-10"></div>
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
