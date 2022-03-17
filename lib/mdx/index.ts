import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { PostMeta } from "./types/PostMeta";
import { serialize } from 'next-mdx-remote/serialize';

/**
 * Returns post meta for all posts in the specified subdirectory of the /posts folder.
 * @param category The subdirectory inside the /posts folder from which to fetch PostMeta
 * @returns An array of PostMeta objects, one for each post in the subdirectory
 */
export const getPostMetas = (category: string) => {
	let posts: PostMeta[] = [];
	const files = fs.readdirSync(path.join(process.cwd(), "posts", category));

	if (files) {
		files.forEach((file) => {
			if (path.extname(file) == ".mdx") {
				const source = fs.readFileSync(
					path.join(process.cwd(), "posts", category, file),
					{
						encoding: "utf-8",
					}
				);
				const { content, data } = matter(source);
				posts.push({ ...data, slug: file.replace(".mdx", "") } as PostMeta);
			}
		});
		return posts;
	} else {
		return null;
	}
};

/**
 * Fetch a list of static paths for all mdx files that exist in /posts and all its subdirectories
 * @returns An array of names for use in static path references
 */
export const getAllStaticPaths = () => {
	let paths: { params: { slug: string } }[] = [];
	const directories = fs
		.readdirSync(path.join(process.cwd(), "posts"))
		.filter((file) => file.isDirectory());
	directories.forEach((directory) => {
		paths = [...paths, getPaths(directory.name)];
	});
	return paths;
};

const getPaths = (category: string) => {
	let paths: { params: { slug: string } }[] = [];

	const files = fs.readdirSync(path.join(process.cwd(), "posts", category));
	if (files) {
		files.forEach((file) => {
			if (path.extname(file) == ".mdx") {
				paths.push({ params: { slug: file.replace(".mdx", "") } });
			}
		});
		return paths;
	} else {
		return null;
	}
};

/**
 * Gets a specific MDX post, including all markdown and metadata, based on the post name and subdirectory.
 * @param category The subdirectory from which to fetch the posts.
 * @param fileName The name of the post as it was passed through context
 * @returns All metadata and markdown data to be parsed into a post
 */
export const getPostData = async (category: string, fileName: string) => {
	const file = fs.readFileSync(
		path.join(process.cwd(), "posts", category, `${fileName}.mdx`),
		"utf-8"
	);

    const { content, data: postMeta } = matter(file);
    const postData = await serialize(content);

    return { postMeta, postData };
};




res.send(200);








