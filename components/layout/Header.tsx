import Logo from "../brand/Logo";
import HeaderNavigation from "../navigation/HeaderNavigation";

const Header = () => {
	return (
		<header className="fixed w-full bg-black">
			<div className="max-w-7xl mx-auto flex justify-between items-center bg-black text-primary-50 px-6 py-3 h-20">
				<Logo />
				<HeaderNavigation />
			</div>
		</header>
	);
};
export default Header;
