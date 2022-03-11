import Link from "next/link";
import { useState } from "react";
import MainNavigation from "./MainNavigation";
import MenuIcon from "./MenuIcon";

const HeaderNavigation = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<MenuIcon open={open} setOpen={setOpen} />
			<MainNavigation open={open} setOpen={setOpen} />
		</nav>
	);
};
export default HeaderNavigation;
