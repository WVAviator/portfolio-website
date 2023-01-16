import React from 'react';
import Initials from './Initials';

const InitialsLoadingIndicator = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Initials
        className="transform scale-[125%]"
        svgClasses="animate-initials-svg stroke-primary-400"
      />
    </div>
  );
};

export default InitialsLoadingIndicator;
