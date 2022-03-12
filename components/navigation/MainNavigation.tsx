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
		href: "/",
		label: "Portfolio",
	},
	{
		href: "/",
		label: "Blog",
	},
	{
		href: "/",
		label: "Services",
	},
];

const MainNavigation = ({ open, setOpen }: Props) => {
	return (
		<>
			<ul
				id="mobilemenu"
				aria-labelledby="menubutton"
				role="menu"
				className="absolute -z-10 text-center w-[50vw] right-0 top-20 lg:hidden"
			>
				{mainLinks.map((link, index) => (
					<motion.li
						role="none"
						animate={{ x: open ? 0 : "100%" }}
						transition={{
							delay: open
								? index * 0.05
								: (mainLinks.length - 1 - index) * 0.05,
							type: "tween",
						}}
						key={index}
						className={`bg-black h-10 ${
							index === mainLinks.length - 1 ? "rounded-bl-md" : ""
						}`}
					>
						<Link href={link.href}>
							<a
								className="w-full h-full flex items-center justify-center"
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
					<li>
						<Link href={link.href}>
							<a className="">{link.label}</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
export default MainNavigation;
