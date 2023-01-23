import { Technology } from './../../types.d';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.headers.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const typeTranslation = {
      post: 'blog',
      technology: 'technology',
      project: 'portfolio',
    };

    console.log('Received revalidation request with body:', req.body);

    const { slug, type } = req.body as {
      slug: {
        current: string;
      };
      type: keyof typeof typeTranslation;
    };

    if (!(type in typeTranslation)) {
      return res.status(400).json({ message: 'Invalid type' });
    }

    const revalidationUrl = `/${typeTranslation[type]}/${slug.current}`;
    console.log('Revalidating', revalidationUrl);

    await res.revalidate(revalidationUrl);
    return res.json({ message: 'Successfully revalidated!' });
  } catch (err) {
    return res
      .status(500)
      .send(`Error occurred in revalidation process: ${err}`);
  }
};

export default handler;
