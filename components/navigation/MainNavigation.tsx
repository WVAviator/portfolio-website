import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
}

interface NavLink {
	href: string;
	label: string;
}

const mainLinks: NavLink[] = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/portfolio",
		label: "Portfolio",
	},
	{
		href: "/blog",
		label: "Blog",
	},
	{
		href: "/services",
		label: "Services",
	},
];

const MainNavigation = ({ open, setOpen }: Props) => {
	return (
		<>
			<ul
				id="mobilemenu"
				aria-label="main menu"
				role="menu"
				className="absolute -z-10 min-w-[25vw] right-0 top-20 lg:hidden"
			>
				{mainLinks.map((link, index) => (
					<motion.li
						role="none"
						animate={{ x: open ? 0 : "100%" }}
						transition={{
							delay: open
								? index * 0.05
								: (mainLinks.length - 1 - index) * 0.05,
							ease: [0.29, 0.98, 0.87, 1.09],
							type: "tween",
						}}
						key={index}
						className={`relative w-[110%] flex group cursor-pointer justify-end items-center py-3 pl-10 pr-16 bg-black hover:text-primary-400 active:text-primary-600 transition-colors duration-200 ${
							index === mainLinks.length - 1
								? "rounded-bl-md"
								: ""
						}`}
					>
						<Link href={link.href}>
							<a
								className="before:absolute before:right-11 before:top-[10%] before:w-1 before:h-[80%] before:bg-primary-400 before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 group-active:before:scale-y-95 before:transition-all before:duration-200"
								onClick={() => setOpen(false)}
								role="menuitem"
							>
								{link.label}
							</a>
						</Link>
					</motion.li>
				))}
			</ul>
			<ul className="hidden lg:flex gap-8">
				{mainLinks.map((link, index) => (
					<li
						key={index}
						className="hover:text-primary-400 cursor-pointer group transition-all duration-200 relative active:text-primary-600"
					>
						<Link href={link.href}>
							<a className=" group-active:before:scale-x-90 before:absolute before:bg-primary-400 before:h-1 before:w-full before:top-12 before:opacity-0 group-hover:before:opacity-100 before:pointer-events-none before:transition-all before:duration-200">
								{link.label}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
export default MainNavigation;
