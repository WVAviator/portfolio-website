import React from "react";
import Button from "../../ui/Button";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

const HeroHeading = () => {
	return (
		<div className=" flex flex-col items-center justify-center gap-8 min-w-[50%] lg:items-start ">
			<div className="text-3xl sm:text-4xl md:text-5xl  text-center lg:text-left">
				Custom professional web design and development for your businesss
			</div>
			<Button href="/" endIcon={<ArrowSmRightIcon />}>
				View Portfolio
			</Button>
		</div>
	);
};

export default HeroHeading;
