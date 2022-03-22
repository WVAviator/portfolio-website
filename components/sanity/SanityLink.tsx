import Link from "next/link";

const SanityLink = ({ value, children }) => {
	const href = value.href;
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a>{children}</a>
			</Link>
		);
	}

	return (
		<a target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};

export default SanityLink;
