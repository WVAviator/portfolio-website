import { StaticImageData } from 'next/image';

export interface SlideshowImage {
  src: StaticImageData | string;
  alt: string;
  href?: string;
}
