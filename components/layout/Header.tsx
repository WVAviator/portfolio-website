import Logo from "../brand/Logo";
import HeaderNavigation from "../navigation/HeaderNavigation";

const Header = () => {
	return (
		<header className="fixed w-full bg-black text-yellow-400 px-6 py-3 flex justify-between items-center h-20">
			<Logo />
			<HeaderNavigation />
		</header>
	);
};
export default Header;
