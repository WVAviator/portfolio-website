import Link from "next/link";

interface Props {
	value: { href: string };
	children: React.ReactNode;
}

const SanityLink = ({ value, children }: Props) => {
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
