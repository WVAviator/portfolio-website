export interface SanityImageAsset {
	_key?: string;
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
	alt?: string;
}

export interface SlideshowImage {
	src: StaticImageData | string | SanityImageAsset;
	alt: string;
	href?: string;
}

export interface SanityItem {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface SanityPost extends SanityItem {
	title: string;
	slug: {
		current: string;
	};
	description: string;
	header: SanityImageAsset;
	body: any;
}

export interface Technology extends SanityPost {
	logo: SanityImageAsset;
}

export interface Project extends SanityPost {
	mobileView: SanityImageAsset;
	desktopView: SanityImageAsset;
	techStack: Technology[];
	projectUrl: string;
	githubUrl: string;
}

export interface BlogPost extends SanityPost {
	relatedTechnologies: Technology[];
	relatedProjects: Project[];
	mainImage: SanityImageAsset;
}
