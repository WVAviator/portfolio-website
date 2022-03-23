import Image from "next/image";
import React from "react";
import laptop from "/public/images/laptop.png";

interface Props {
	children?: React.ReactNode;
	className?: string;
}

const Laptop = ({ children, className = "" }: Props) => {
	return (
		<div className={`relative ${className}`}>
			<Image src={laptop} alt="A laptop" />
			<div className="absolute  w-[74.1%] aspect-[16/10.1] top-[4.1%] left-[13.1%]">
				{children}
			</div>
		</div>
	);
};

export default Laptop;
