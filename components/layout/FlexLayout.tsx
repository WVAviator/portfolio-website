import React from 'react';

interface FlexLayoutProps {
  className: string;
}

const FlexLayout: React.FC<React.PropsWithChildren<FlexLayoutProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`p-8 flex items-center justify-center flex-col md:flex-row ${className}`}
    >
      {React.Children.toArray(children).map((child, index) => {
        return (
          <div
            className="relative flex-1 p-8 flex justify-center items-center"
            key={index}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default FlexLayout;
