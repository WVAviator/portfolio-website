import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./MenuIcon";

const HeaderNavigation = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<MenuIcon open={open} setOpen={setOpen} />
			<ul
				className={`absolute -z-10 bg-black text-center w-full left-0 top-20 transition-transform duration-300 ease-in-out ${
					open ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<li className="h-8">
					<Link href="/">
						<a className="w-full h-full flex items-center justify-center">
							Home
						</a>
					</Link>
				</li>
				<li className="h-8">
					<Link href="/">
						<a className="w-full h-full flex items-center justify-center">
							Portfolio
						</a>
					</Link>
				</li>
				<li className="h-8">
					<Link href="/">
						<a className="w-full h-full flex items-center justify-center">
							Blog
						</a>
					</Link>
				</li>
				<li className="h-8">
					<Link href="/">
						<a className="w-full h-full flex items-center justify-center">
							Services
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default HeaderNavigation;
