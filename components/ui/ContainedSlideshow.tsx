import Image from "next/image";
import { useRef } from "react";
import useCycledIndex from "../../lib/hooks/useCycledIndex";
import { SlideshowImage } from "../../lib/types/SlideshowImage";

interface Props {
	slides: SlideshowImage[];
}

const ContainedSlideshow = ({ slides }: Props) => {
	const [currentIndex] = useCycledIndex(slides.length, 5000);
	const lazyRoot = useRef(null);

	return (
		<>
			<div
				className="relative w-full h-full rounded-[0.175rem] shadow-inner overflow-hidden"
				ref={lazyRoot}
			>
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
									priority={index === 0}
									layout="fill"
									objectFit="cover"
									lazyRoot={lazyRoot}
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
