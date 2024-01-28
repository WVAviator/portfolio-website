import React from 'react';
import DefaultHead from '../meta/DefaultHead';
import Header from './Header';
import Footer from './Footer';
import { ColorSchemeContext } from '../../lib/context/ColorSchemeProvider';

const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { colorScheme } = React.useContext(ColorSchemeContext);

  return (
    <div className={colorScheme === 'dark' ? 'dark' : ''}>
      <DefaultHead />
      <Header />
      <main className="paper-texture dark:paper-texture-dark min-h-screen overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default PageLayout;
