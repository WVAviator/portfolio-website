import { NextSeo, ProductJsonLd } from 'next-seo';
import Head from 'next/head';

const DefaultHead = () => {
  return (
    <>
      <NextSeo
        title="Alexander Durham | Software Developer"
        description="Alexander Durham is a software developer with experience in full-stack development, game development, and computer science. He has experience working with TypeScript, JavaScript, React, Next.js, Node.js, Java, Rust, and more."
        canonical="https://www.wvaviator.com"
        openGraph={{
          type: 'website',
          url: 'https://www.wvaviator.com',
          title: 'Alexander Durham | Software Developer',
          description:
            'Alexander Durham is a software developer with experience in full-stack development, game development, and computer science. He has experience working with TypeScript, JavaScript, React, Next.js, Node.js, Java, Rust, and more.',
          images: [
            {
              url: 'https://www.wvaviator.com/images/headshot.png',
              width: 400,
              height: 600,
              alt: 'Alexander Durham',
            },
          ],
        }}
      ></NextSeo>
    </>
  );
};
export default DefaultHead;
