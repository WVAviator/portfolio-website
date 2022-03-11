interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const MenuIcon = ({ open, setOpen }: Props) => {
	return (
		<button
			className="lg:hidden h-7 w-7 flex flex-col justify-center items-center"
			onClick={() => setOpen(!open)}
		>
			<div className="sr-only">Menu</div>
			<div className="relative">
				<div
					className={`w-6 h-1 bg-yellow-400 rounded-sm absolute ${
						open
							? "top-0 rotate-45 transition-top-then-rotate"
							: "top-2 rotate-0 transition-rotate-then-top"
					}`}
				></div>
				<div
					className={`w-6 h-1 bg-yellow-400 rounded-sm transition-opacity duration-0 delay-150 ${
						open ? "opacity-0" : "opacity-100"
					}`}
				></div>
				<div
					className={`w-6 h-1 bg-yellow-400 rounded-sm absolute ${
						open
							? "top-0 -rotate-45 transition-top-then-rotate"
							: "-top-2 rotate-0 transition-rotate-then-top"
					}`}
				></div>
			</div>
		</button>
	);
};
export default MenuIcon;
