import Image, { ImageProps } from "next/image";
import test from "/images/test.png";

const MDXImage = ({ className = "", ...rest }: ImageProps) => {
	return (
		<div
			className={`relative mx-0 my-4 w-full aspect-[1.5] overflow-hidden shadow-md rounded ${className}`}
		>
			<Image layout="fill" objectFit="cover" objectPosition="top" {...rest} />
		</div>
	);
};

export default MDXImage;
