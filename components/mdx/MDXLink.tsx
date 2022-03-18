import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	href: string;
}

const MDXLink = ({ href, ...rest }: Props) => {
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	return isInternalLink ? (
		<Link href={href}>
			<a {...rest} />
		</Link>
	) : (
		<a target="_blank" rel="noopener noreferrer" {...rest} />
	);
};

export default MDXLink;
