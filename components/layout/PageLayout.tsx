import DefaultHead from "../meta/DefaultHead";
import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

const PageLayout = ({ children }: Props) => {
	return (
		<>
			<DefaultHead />
			<Header />
			<main>{children}</main>
		</>
	);
};
export default PageLayout;
