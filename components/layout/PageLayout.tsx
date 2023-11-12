import React from 'react';
import DefaultHead from '../meta/DefaultHead';
import Header from './Header';
import Footer from './Footer';

const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <DefaultHead />
      <Header />
      <main className="paper-texture min-h-screen overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default PageLayout;
