import sanityClient from '../../lib/sanity';
import Image, { ImageProps } from 'next/image';
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image';
import { SanityImageAsset } from '../../types';
import { useMemo } from 'react';

type LayoutType = 'fill' | 'responsive' | 'intrinsic' | 'fixed' | 'raw';

const getImageOptions = (
	imageProps: UseNextSanityImageProps,
	maxWidth = '800px'
) => ({
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
	raw: {
		...imageProps,
	},
});

interface SanityImageProps extends Omit<ImageProps, 'src'> {
	source: SanityImageAsset;
	layout?: LayoutType;
	maxWidth?: string;
}

const SanityImage: React.FC<SanityImageProps> = ({
	source,
	layout = 'responsive',
	maxWidth = '800px',
	...rest
}) => {
	const imageProps = useNextSanityImage(sanityClient, source);

	const imageOptions = useMemo(
		() => getImageOptions(imageProps, maxWidth),
		[imageProps, maxWidth]
	);

	return (
		<Image
			{...imageOptions[layout]}
			layout={layout}
			{...rest}
			alt={source.alt ?? ''}
		/>
	);
};

export default SanityImage;
