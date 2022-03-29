interface Props {
	children: React.ReactNode;
	className?: string;
}

const Sidebar = ({ children, className = "" }: Props) => {
	return (
		<section
			aria-label="sidebar"
			className="hidden lg:flex flex-col items-center w-full min-h-screen p-6 pt-0"
		>
			<div
				className={`flex flex-col items-center justify-center w-full sticky top-36 ${className}`}
			>
				{children}
			</div>
		</section>
	);
};
export default Sidebar;
