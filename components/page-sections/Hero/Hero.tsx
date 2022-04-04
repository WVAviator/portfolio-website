import React from "react";
import Smartphone from "../../display/Smartphone";
import Laptop from "../../display/Laptop";
import Button from "../../ui/Button";
import ArrowSmRightIcon from "@heroicons/react/solid/ArrowSmRightIcon";
import ContainedSlideshow from "../../ui/ContainedSlideshow";
import SanityImage from "../../sanity/SanityImage";
import { SanityImageAsset } from "../../../types";
import Link from "next/link";

interface Props {
	desktopImages: SanityImageAsset[];
	mobileImages: SanityImageAsset[];
}

const Hero = ({ desktopImages, mobileImages }: Props) => {
	return (
		<section className="page-container max">
			<div className="grid grid-cols-1 py-8 lg:grid-cols-2 lg:py-16 gap-y-6">
				<div className="p-2 lg:p-6">
					<div className=" flex flex-col items-center justify-center gap-9 sm:gap-12 md:gap-14 min-w-[50%] lg:items-start ">
						<h1 className="text-4xl sm:text-5xl md:text-6xl text-center lg:text-left">
							Professional web design and development for your
							business
						</h1>
						<Button href="/" endIcon={<ArrowSmRightIcon />}>
							View Portfolio
						</Button>
					</div>
				</div>
				<Link href="/portfolio">
					<a>
						<div className="p-2 lg:p-6 flex flex-col items-center h-[70vw] lg:h-[30rem] cursor-pointer transition-transform hover:scale-105 duration-200">
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
									{mobileImages.map((image) => (
										<SanityImage
											source={image}
											key={image.asset._ref}
											layout="fill"
										/>
									))}
								</ContainedSlideshow>
							</Smartphone>
						</div>
					</a>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
