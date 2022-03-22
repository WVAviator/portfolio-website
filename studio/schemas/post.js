export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "techStack",
			title: "Related Technologies",
			type: "array",
			of: [{ type: "reference", to: { type: "technology" } }],
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],
};
