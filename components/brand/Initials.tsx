interface InitialsProps {
	strokeWidth?: string;
	size?: number;
	fill?: string;
	svgClasses?: string;
	className?: string;
}

const Initials: React.FC<InitialsProps> = ({
	strokeWidth = '2.5',
	size = 57,
	fill = 'none',
	svgClasses = 'stroke-primary-400',
	className = '',
}) => {
	const ASPECT_RATIO = 51 / 57;
	const width = size.toString();
	const height = (size * ASPECT_RATIO).toString();

	return (
		<div className={className}>
			<svg
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				fill={fill}
				xmlns="http://www.w3.org/2000/svg"
				className={svgClasses}
			>
				<path
					d="M13.2195 49.5C14.7458 48.1605 13.7762 49.7025 16.278 45.6509C18.7797 41.5992 24.5379 11.4218 28.7744 0.5L30.5132 22.5617L31.4775 32.4396C31.4775 39.9337 37.0577 44.6078 36.046 34.233C34.855 22.0205 7.75509 13.1565 15.6539 22.0943C23.0203 30.4297 58.2085 22.5617 37.0577 21.4087C16.2951 20.277 -5.91736 23.81 5.36297 13.6809C16.6433 3.55184 46.2782 2.17239 53.482 8.22782C60.6858 14.2833 40.6066 33.1304 27.7627 39.1859C17.4875 44.0302 18.6278 45.1144 1 49.5"
					strokeWidth={strokeWidth}
				/>
			</svg>
		</div>
	);
};
export default Initials;
