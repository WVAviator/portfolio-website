export interface PostMeta {
	title: string;
	subtitle: string;
	description: string;
	cardImageUrl: string;
	headerImageUrl: string;
	datePosted: string;
	dateUpdated: string;
	slug: string;
	category: string;
}

export interface SlideshowImage {
	src: StaticImageData | string;
	alt: string;
	href?: string;
}
