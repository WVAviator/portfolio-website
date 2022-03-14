import Image from "next/image";
import React from "react";
import useCycledIndex from "../../lib/hooks/useCycledIndex";
import { SlideshowImage } from "../../lib/types/SlideshowImage";

interface Props {
	slides: SlideshowImage[];
}

const ContainedSlideshow = ({ slides }: Props) => {
	const [currentIndex, increment, decrement] = useCycledIndex(
		slides.length,
		5000
	);

	return (
		<>
			<div className="relative w-full h-full rounded-sm overflow-hidden">
				{slides.map((slide, index) => {
					return (
						<div
							key={index}
							className="absolute w-full h-full transition-transform duration-100 ease-in-out"
							style={{
								transform: `translateX(${100 * (currentIndex - index)}%)`,
							}}
						>
							<div className="relative w-full h-full">
								<Image
									src={slide.src}
									alt={slide.alt}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ContainedSlideshow;
