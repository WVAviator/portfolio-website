import React from "react";
import Button from "../../ui/Button";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

const HeroHeading = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-8">
			<div className="text-3xl text-center">
				Custom professional web design and development for your business
			</div>
			<Button href="/" endIcon={<ArrowSmRightIcon />}>
				View Portfolio
			</Button>
		</div>
	);
};

export default HeroHeading;
