import { SanityImageAsset, SanityPost } from '../../types';
import SanityImage from '../sanity/SanityImage';
import SanityLink from '../sanity/SanityLink';
import PostHeader from './PostHeader';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Code from '../ui/Code';
import IFrame from '../ui/IFrame';

interface ProseProps {
  post: SanityPost;
}

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <div className="shadow-md rounded overflow-hidden">
        <SanityImage
          source={value as SanityImageAsset}
          alt={(value as SanityImageAsset).alt || ''}
        />
      </div>
    ),
    code: ({ value }) => <Code language={value.language}>{value.code}</Code>,
    iframe: ({ value }) => <IFrame {...value} />,
  },
  marks: {
    link: ({ children, value }) => (
      <SanityLink value={value}>{children}</SanityLink>
    ),
  },
};

const Prose: React.FC<ProseProps> = ({ post }) => {
  return (
    <article className="prose md:prose-lg lg:prose-xl prose-slate prose-a:cursor-pointer hover:prose-a:text-primary-400 prose-a:transition-colors prose-a:duration-200 prose-code:before:content-[''] prose-code:after:content-[''] max-w-full md:max-w-[65ch]">
      <PostHeader
        updated={post._updatedAt}
        title={post.title}
        headerImage={post.header}
      />

      <PortableText value={post.body} components={components} />
    </article>
  );
};

export default Prose;
