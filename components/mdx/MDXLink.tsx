import { resolveHref } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	href: string;
}

const MDXLink = (props: Props) => {
	const { href, ...rest } = props;

	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	return (
		<span className="cursor-pointer">
			{isInternalLink ? (
				<Link href={href}>
					<a {...rest} />
				</Link>
			) : (
				<a target="_blank" rel="noopener noreferrer" {...rest} />
			)}
		</span>
	);
};

export default MDXLink;
