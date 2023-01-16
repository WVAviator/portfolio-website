import Link from 'next/link';
import React from 'react';
import { SocialMediaProps } from '../Socials';

const LinkedIn: React.FC<SocialMediaProps> = ({ username, className = '' }) => {
  return (
    <Link href={`https://www.linkedin.com/in/${username}/`}>
      <div className={`w-16 h-16 relative hover:scale-110 hover:shadow-sm ${className}`}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_409_16)">
            <path
              d="M412.307 412.314H346.52V309.287C346.52 284.72 346.082 253.093 312.305 253.093C278.04 253.093 272.797 279.862 272.797 307.499V412.307H207.012V200.443H270.166V229.397H271.051C277.371 218.59 286.504 209.699 297.477 203.673C308.45 197.646 320.853 194.708 333.363 195.172C400.041 195.172 412.335 239.031 412.335 296.088L412.307 412.314ZM132.781 171.484C111.696 171.487 94.6006 154.397 94.5971 133.312C94.5936 112.227 111.682 95.1316 132.767 95.1282C153.852 95.123 170.948 112.213 170.951 133.298C170.953 143.424 166.933 153.135 159.774 160.296C152.616 167.457 142.906 171.482 132.781 171.484ZM165.675 412.316H99.8193V200.443H165.674V412.314L165.675 412.316ZM445.104 34.0313H66.7621C48.8807 33.8302 34.2166 48.1544 33.998 66.0358V445.956C34.2096 463.846 48.872 478.184 66.7604 477.997H445.104C463.03 478.219 477.75 463.881 477.998 445.956V66.0063C477.743 48.0902 463.022 33.7677 445.104 34.0019"
              fill="#0A66C2"
            />
          </g>
          <defs>
            <clipPath id="clip0_409_16">
              <rect
                width="444"
                height="444"
                fill="white"
                transform="translate(34 34)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Link>
  );
};

export default LinkedIn;
