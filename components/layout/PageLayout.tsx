import React from 'react';
import DefaultHead from '../meta/DefaultHead';
import Header from './Header';

const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <DefaultHead />
      <Header />
      <main className="paper-texture min-h-screen">{children}</main>
    </>
  );
};
export default PageLayout;
