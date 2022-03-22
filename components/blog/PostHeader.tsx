import Image from "next/image";
import { PostMeta } from "../../lib/types/PostMeta";

interface Props {
	postMeta: PostMeta;
}

const PostHeader = ({ postMeta }: Props) => {
	const formattedDate = new Date(postMeta.dateUpdated).toLocaleDateString(
		"en-US"
	);

	return (
		<div className="prose md:prose-lg lg:prose-xl prose-slate mb-10">
			<p>
				Updated <time>{formattedDate}</time>
			</p>
			<h1>{postMeta.title}</h1>

			<div className="relative w-100 aspect-[2] rounded shadow-md overflow-hidden"></div>
		</div>
	);
};
export default PostHeader;
