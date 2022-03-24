import Image from "next/image";

interface Props {
	updated: string;
	title: string;
}

const PostHeader = ({ updated, title }: Props) => {
	const formattedDate = new Date(updated).toLocaleDateString();

	return (
		<div className="prose md:prose-lg lg:prose-xl prose-slate mb-10">
			<p>
				Updated <time>{formattedDate}</time>
			</p>
			<h1>{title}</h1>

			<div className="relative w-100 aspect-[2] rounded shadow-md overflow-hidden"></div>
		</div>
	);
};
export default PostHeader;
