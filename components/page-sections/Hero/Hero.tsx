import React from "react";
import Smartphone from "../../display/Smartphone";
import HeroHeading from "./HeroHeading";
import Laptop from "../../display/Laptop";
import Button from "../../ui/Button";
import ArrowSmRightIcon from "@heroicons/react/solid/ArrowSmRightIcon";
import ContainedSlideshow from "../../ui/ContainedSlideshow";

import portfolioSiteImage from "/public/images/portfolio/portfolio-site-desktop.png";
import palsOfPawsImage from "/public/images/portfolio/pals-of-paws-desktop.png";
import atomicRunningImage from "/public/images/portfolio/atomic-running-sports-desktop.png";
import Image from "next/image";
import SanityImage from "../../sanity/SanityImage";
import { SanityImageAsset } from "../../../types";

interface Props {
	desktopImages: SanityImageAsset[];
}

const Hero = ({ desktopImages }: Props) => {
	return (
		<section className="page-container">
			<div className="grid grid-cols-1 py-8 lg:grid-cols-2 lg:py-16 gap-y-6">
				<div className="p-2 lg:p-6">
					<div className=" flex flex-col items-center justify-center gap-8 min-w-[50%] lg:items-start ">
						<div className="text-4xl sm:text-5xl md:text-6xl  text-center lg:text-left">
							Professional web design and development for your business
						</div>
						<Button href="/" endIcon={<ArrowSmRightIcon />}>
							View Portfolio
						</Button>
					</div>
				</div>
				<div className="p-2 lg:p-6 flex flex-col items-center">
					<Laptop className="max-w-[100%]">
						<ContainedSlideshow>
							{desktopImages.map((image) => (
								<SanityImage
									source={image}
									key={image.asset._ref}
									layout="fill"
								/>
							))}
						</ContainedSlideshow>
					</Laptop>
					<Smartphone className="max-w-[20%] -translate-y-[110%] -translate-x-[180%]">
						<ContainedSlideshow>
							{desktopImages.map((image) => (
								<SanityImage
									source={image}
									key={image.asset._ref}
									layout="fill"
								/>
							))}
						</ContainedSlideshow>
					</Smartphone>
				</div>
			</div>
		</section>
	);
};

export default Hero;
