import Head from 'next/head';

const DefaultHead = () => {
	return (
		<Head>
			<title>Web Design and Development by Alexander Durham</title>
			<meta
				name="description"
				content="Web Design and Development by Alexander Durham"
			/>
			<meta
				name="keywords"
				content="web design, web development, web application development"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* TODO: Remove this when site is ready to be searchable */}
			<meta name="robots" content="noindex" />
		</Head>
	);
};
export default DefaultHead;
