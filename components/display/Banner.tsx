import React from 'react';
interface BannerProps {
	children: React.ReactNode;
	className?: string;
	duration?: number;
}

const Banner: React.FC<BannerProps> = ({
	children,
	className,
	duration = 3,
}) => {
	const [animationPaused, setAnimationPaused] = React.useState(false);
	const animationDuration = React.Children.count(children) * duration;

	return (
		<div
			className={`relative w-full flex items-center overflow-x-hidden ${className} `}
			onMouseEnter={() => setAnimationPaused(true)}
			onMouseLeave={() => setAnimationPaused(false)}
		>
			<ul
				className="absolute flex items-center min-w-full"
				style={{
					animation: `marquee-left ${animationDuration}s linear infinite ${
						animationPaused ? 'paused' : 'running'
					}`,
				}}
			>
				{React.Children.map(children, (child, index) => {
					return <li key={index}>{child}</li>;
				})}
			</ul>
			<ul
				className="absolute flex items-center min-w-full"
				style={{
					animation: `marquee-right ${animationDuration}s linear infinite ${
						animationPaused ? 'paused' : 'running'
					}`,
				}}
			>
				{React.Children.map(children, (child, index) => {
					return <li key={index}>{child}</li>;
				})}
			</ul>
		</div>
	);
};
export default Banner;
