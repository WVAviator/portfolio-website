import sanityClient from "../../lib/sanity";
import Image, { ImageProps } from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { SanityImageAsset } from "../../types";

interface Props extends Omit<ImageProps, "src"> {
	sanityImage: SanityImageAsset;
	maxWidth?: string;
}

const SanityImage = ({
	sanityImage,
	layout = "responsive",
	maxWidth = "800px",
	...rest
}: Props) => {
	const imageProps = useNextSanityImage(sanityClient, sanityImage);

	const commonProps = {
		alt: sanityImage.alt ?? "",
		layout,
		...rest,
	};

	const imageOptions = {
		fill: {
			src: imageProps.src,
			loader: imageProps.loader,
		},
		responsive: {
			...imageProps,
			sizes: `(max-width: ${maxWidth}) 100vw, ${maxWidth}`,
		},
		intrinsic: {
			...imageProps,
		},
		fixed: {
			...imageProps,
		},
	};

	return <Image {...imageOptions[layout]} {...commonProps} />;
};

export default SanityImage;
