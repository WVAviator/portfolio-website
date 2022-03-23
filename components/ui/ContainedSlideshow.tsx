import { ImageProps } from "next/image";
import React from "react";
import { useRef } from "react";
import useCycledIndex from "../../lib/hooks/useCycledIndex";

interface Props {
	children: React.ReactElement<ImageProps> | React.ReactElement<ImageProps>[];
	delay?: number;
}

const ContainedSlideshow = ({ children, delay = 5000 }: Props) => {
	const childArray = React.Children.toArray(children);
	const [currentIndex] = useCycledIndex(childArray.length, delay);
	const lazyRoot = useRef(null);

	return (
		<div
			className="relative w-full h-full rounded-[0.175rem] shadow-inner overflow-hidden"
			ref={lazyRoot}
		>
			{React.Children.map(children, (child, index) => {
				return (
					<div
						key={index}
						className="absolute w-full h-full transition-transform duration-100 ease-in-out"
						style={{
							transform: `translateX(${100 * (currentIndex - index)}%)`,
						}}
					>
						<div className="relative w-full h-full">
							{React.cloneElement(child, { lazyRoot: lazyRoot })}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ContainedSlideshow;
