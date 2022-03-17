import Link from "next/link";

const MDXLink = (props) => {
	const href = props.href;
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	return isInternalLink ? (
		<Link href={href}>
			<a {...props}>{props.children}</a>
		</Link>
	) : (
		<a target="_blank" rel="noopener noreferrer" {...props} />
	);
};
