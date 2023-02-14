import Link from 'next/link';

interface SanityLinkProps {
	value: { href: string };
	children: React.ReactNode;
	className?: string;
}

const SanityLink: React.FC<SanityLinkProps> = ({
	value,
	children,
	className = '',
}) => {
	const href = value.href || '#';
	const isInternalLink =
		href && (href.startsWith('/') || href.startsWith('#'));

	if (isInternalLink) {
		return (
			<Link href={href} className={className}>
				{children}
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
