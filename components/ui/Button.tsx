import Link from "next/link";

interface Props {
	href: string;
	variant?: "filled" | "outlined" | "ghost";
	children?: React.ReactNode;
	className?: string;
}

const Button = ({
	href,
	variant = "filled",
	children = "",
	className = "",
}: Props) => {
	const variantClasses = {
		filled:
			"bg-primary-400 hover:bg-primary-600 active:bg-primary-700 text-black ",
		outlined:
			"border border-primary-400 hover:bg-primary-400/10 active:bg-primary-500/10 text-primary-400",
		ghost: "text-primary-400 hover:bg-primary-400/10 active:bg-primary-500/10",
	};

	return (
		<>
			<Link href={href}>
				<a
					className={
						`${variantClasses[variant]} transition-all duration-200 ease-in-out py-2 px-4 rounded active:scale-95 focus:ring-2 focus:ring-primary-300/50 ` +
						className
					}
				>
					{children}
				</a>
			</Link>
		</>
	);
};
export default Button;
