import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import sanityClient from '../../lib/sanity';
import { Miscellaneous, Project } from '../../types';
import Prose from '../../components/blog/Prose';
import Sidebar from '../../components/blog/Sidebar';
import TechStack from '../../components/display/TechStack';
import Laptop from '../../components/display/Laptop';
import SanityImage from '../../components/sanity/SanityImage';
import Smartphone from '../../components/display/Smartphone';
import ProjectShowcase from '../../components/display/ProjectShowcase';

interface MiscellaneousPageProps {
  miscellaneous: Miscellaneous;
}

const MiscellaneousPage: NextPage<MiscellaneousPageProps> = ({
  miscellaneous,
}) => {
  return (
    <div className="page-container">
      <div className="flex">
        <Prose post={miscellaneous} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
	*[_type == "misc" && slug.current == $slug][0] {
		title,
		description,
		slug,
		body,
		_updatedAt
	}
	`;

  const miscellaneous: Miscellaneous = await sanityClient.fetch(query, {
    slug: params?.misc,
  });

  return {
    props: { miscellaneous },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
	*[_type == "misc"] {
		slug,
	}
	`;

  const misc: Miscellaneous[] = await sanityClient.fetch(query);
  const paths = misc.map(({ slug }) => {
    return {
      params: {
        misc: slug.current,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default MiscellaneousPage;
