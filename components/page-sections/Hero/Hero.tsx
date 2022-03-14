import React from "react";
import HeroHeading from "./HeroHeading";
import HeroLaptop from "./HeroLaptop";

const Hero = () => {
	return (
		<section>
			<div className=" flex flex-wrap items-center justify-center page-container lg:flex-nowrap lg:justify-between lg:items-start lg:mt-10">
				<div className="p-6">
					<HeroHeading />
				</div>
				<div className="p-6">
					<HeroLaptop />
				</div>
			</div>
		</section>
	);
};

export default Hero;
