import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Github from './socials/Github';
import LinkedIn from './socials/LinkedIn';
import Tiktok from './socials/Tiktok';
import Twitter from './socials/Twitter';

export interface SocialMediaProps {
  username: string;
  className?: string;
  dark?: boolean;
}

interface SocialAccount {
  name: string;
  component: React.FC<SocialMediaProps>;
  props: SocialMediaProps;
}

const socials: SocialAccount[] = [
  {
    name: 'Github',
    component: Github,
    props: {
      username: 'wvaviator',
    },
  },
  {
    name: 'LinkedIn',
    component: LinkedIn,
    props: {
      username: 'wvaviator',
    },
  },
  {
    name: 'Twitter',
    component: Twitter,
    props: {
      username: 'wvaviator',
    },
  },
  {
    name: 'Tiktok',
    component: Tiktok,
    props: {
      username: 'wvaviator1',
    },
  },
];

interface SocialsProps {
  className?: string;
  socialClasses?: string;
  dark?: boolean;
}

const Socials = ({
  className = '',
  dark = false,
  socialClasses = 'w-8 h-8',
}) => {
  return (
    <div
      className={`flex justify-center items-center gap-2 ${className}`}
    >
      {socials.map((social) =>
        React.createElement(social.component, {
          ...social.props,
          dark: dark,
          className: socialClasses,
        })
      )}
    </div>
  );
};

export default Socials;
