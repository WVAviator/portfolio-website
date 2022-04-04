import { motion } from "framer-motion";
import React, { useRef } from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
	duration?: number;
}

const Banner = ({ children, className, duration = 3 }: Props) => {
	const childCount = React.Children.count(children);

	return (
		<div
			className={`relative max-w-full flex items-center w-screen overflow-x-hidden ${className}`}
		>
			<motion.ul
				className="absolute flex items-center min-w-full"
				animate={{ x: ["0%", "-100%", "100%", "0%"] }}
				transition={{
					duration: childCount * duration,
					times: [0, 1, 1, 2],
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{React.Children.map(children, (child, index) => {
					return <li key={index}>{child}</li>;
				})}
			</motion.ul>
			<motion.ul
				className="absolute flex items-center min-w-full"
				animate={{ x: ["100%", "0%", "-100%", "100%"] }}
				transition={{
					duration: childCount * duration,
					times: [0, 1, 2, 2],
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{React.Children.map(children, (child, index) => {
					return <li key={index}>{child}</li>;
				})}
			</motion.ul>
		</div>
	);
};
export default Banner;
