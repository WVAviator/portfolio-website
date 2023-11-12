import React from 'react';
import Logo from '../brand/Logo';
import Socials from '../brand/Socials';

const Footer = () => {
  return (
    <footer className="w-full bg-black flex flex-col gap-8 items-center justify-center p-6 md:flex-row md:justify-between">
      <div className="flex flex-col justify-center items-center gap-2">
        <Logo />
        <div>
          <p className="text-cyan-400 text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="xsm:hidden">Alexander Durham</span>
          </p>
        </div>
      </div>
      <Socials
        dark
        className="lg:w-[33%]"
        socialClasses="w-8 h-8 md:w-12 md:h-12"
      />
    </footer>
  );
};

export default Footer;
