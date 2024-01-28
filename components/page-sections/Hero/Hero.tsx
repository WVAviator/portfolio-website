import React from 'react';
import Smartphone from '../../display/Smartphone';
import Laptop from '../../display/Laptop';
import Button from '../../ui/Button';
import ContainedSlideshow from '../../ui/ContainedSlideshow';
import SanityImage from '../../sanity/SanityImage';
import { SanityImageAsset } from '../../../types';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface HeroProps {
  desktopImages: SanityImageAsset[];
  mobileImages: SanityImageAsset[];
}

const Hero: React.FC<HeroProps> = ({ desktopImages, mobileImages }) => {
  return (
    <section className="page-container max">
      <div className="grid grid-cols-1 py-8 lg:grid-cols-2 lg:py-16 gap-y-6">
        <div className="p-2 lg:p-6">
          <div className=" flex flex-col items-center justify-center gap-9 sm:gap-12 md:gap-14 min-w-[50%] lg:items-start ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-center lg:text-left font-medium leading-normal sm:leading-normal md:leading-normal lg:leading-snug xl:leading-normal pen-drawn dark:pen-drawn-dark">
              Designing efficient and effective web and software solutions
            </h1>
            <Button href="/portfolio" endIcon={<ArrowRightIcon />}>
              View Portfolio
            </Button>
          </div>
        </div>
        <Link href="/portfolio">
          <div className="p-2 lg:p-6 flex flex-col items-center h-[70vw] lg:h-[30rem] cursor-pointer transition-transform hover:scale-105 duration-200">
            <Laptop className="max-w-[100%]">
              <ContainedSlideshow>
                {desktopImages.map((image) => (
                  <SanityImage
                    source={image}
                    alt={image.alt || ''}
                    key={image.asset._ref}
                    layout="fill"
                  />
                ))}
              </ContainedSlideshow>
            </Laptop>
            <Smartphone className="max-w-[20%] -translate-y-[110%] -translate-x-[180%]">
              <ContainedSlideshow>
                {mobileImages.map((image) => (
                  <SanityImage
                    source={image}
                    alt={image.alt || ''}
                    key={image.asset._ref}
                    layout="fill"
                  />
                ))}
              </ContainedSlideshow>
            </Smartphone>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
