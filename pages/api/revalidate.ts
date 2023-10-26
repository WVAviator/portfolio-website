import { Technology } from './../../types.d';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		return res.status(405).json({
			message: 'Method not allowed',
			request: {
				method: req.method,
				body: req.body,
			},
		});
	}

	if (req.headers.token !== process.env.REVALIDATE_TOKEN) {
		return res.status(401).json({
			message: 'Invalid token',
			request: {
				method: req.method,
				body: req.body,
			},
		});
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
			return res.status(400).json({
				message: 'Invalid type',
				type,
				slug,
				request: {
					method: req.method,
					body: req.body,
				},
			});
		}

		const resourceUrl = `/${typeTranslation[type]}/${slug.current}`;
		const summaryUrl = `/${typeTranslation[type]}`;
		const homeUrl = `/`;

		console.log('Revalidating', revalidationUrl);
		await res.revalidate(resourceUrl);
		await res.revalidate(summaryUrl);
		await res.revalidate(homeUrl);

		return res.json({
			message: 'Successfully revalidated!',
			revalidated: true,
		});
	} catch (err) {
		return res
			.status(500)
			.send(`Error occurred in revalidation process: ${err}`);
	}
};

export default handler;
