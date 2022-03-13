import React from "react";
import HeroHeading from "./HeroHeading";
import HeroLaptop from "./HeroLaptop";

const Hero = () => {
	return (
		<section>
			<div className="flex flex-wrap items-center justify-center page-container">
				<div>
					<HeroHeading />
				</div>
				<div>
					<HeroLaptop />
				</div>
			</div>
		</section>
	);
};

export default Hero;
