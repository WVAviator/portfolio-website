const STUDIO_REWRITE = {
	source: "/studio/:path*",
	destination:
		process.env.NODE_ENV === "development"
			? "http://localhost:3000/studio/:path*"
			: "/studio/index.html",
};

module.exports = {
	rewrites: () => [STUDIO_REWRITE],
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io']
	}
};
