import React from "react";
import HeroHeading from "./HeroHeading";
import HeroLaptop from "./HeroLaptop";

const Hero = () => {
	return (
		<section>
			<div className="flex flex-wrap items-center justify-center page-container">
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
