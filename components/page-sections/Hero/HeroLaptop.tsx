import Image from "next/image";
import React from "react";
import ContainedSlideshow from "../../ui/ContainedSlideshow";
import laptop from "/public/images/laptop.png";
import portfolioSiteImage from "/public/images/portfolio/portfolio-site-desktop.png";
import palsOfPawsImage from "/public/images/portfolio/pals-of-paws-desktop.png";
import atomicRunningImage from "/public/images/portfolio/atomic-running-sports-desktop.png";

const HeroLaptop = () => {
	return (
		<div className="relative max-w-[100rem]">
			<Image src={laptop} />
			<div className="absolute  w-[74.1%] aspect-[16/10.1] top-[4.1%] left-[13.1%]">
				<ContainedSlideshow
					slides={[
						{
							src: portfolioSiteImage,
							alt: "Portfolio Website",
						},
						{
							src: palsOfPawsImage,
							alt: "Pals of Paws Website",
						},
						{
							src: atomicRunningImage,
							alt: "Atomic Running Sports Landing Page",
						},
					]}
				/>
			</div>
		</div>
	);
};

export default HeroLaptop;
