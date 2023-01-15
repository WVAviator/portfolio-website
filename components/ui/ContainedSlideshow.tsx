import { ImageProps } from 'next/image';
import React from 'react';
import { useRef } from 'react';
import useCycledIndex from '../../lib/hooks/useCycledIndex';

interface ContainedSlideshowProps {
  children: React.ReactElement<ImageProps> | React.ReactElement<ImageProps>[];
  delay?: number;
}

const ContainedSlideshow: React.FC<ContainedSlideshowProps> = ({
  children,
  delay = 5000,
}) => {
  const childArray = React.Children.toArray(children);
  const [currentIndex] = useCycledIndex(childArray.length, delay);

  return (
    <div className="relative w-full h-full rounded-[0.175rem] shadow-inner overflow-hidden">
      {React.Children.map(children, (child, index) => {
        return (
          <div
            key={index}
            className="absolute w-full h-full transition-transform duration-100 ease-in-out"
            style={{
              transform: `translateX(${100 * (currentIndex - index)}%)`,
            }}
          >
            <div className="relative w-full h-full">
              {React.cloneElement(
                child,
                index === 0 ? { priority: true } : { loading: 'lazy' }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContainedSlideshow;
