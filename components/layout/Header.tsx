import Logo from "../brand/Logo";
import HeaderNavigation from "../navigation/HeaderNavigation";

const Header = () => {
	return (
		<header className="fixed w-full  ">
			<div className="max-w-6xl mx-auto flex justify-between items-center bg-black text-yellow-400 px-6 py-3  h-20">
				<Logo />
				<HeaderNavigation />
			</div>
		</header>
	);
};
export default Header;
