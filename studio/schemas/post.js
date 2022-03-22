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
			name: "description",
			title: "Description",
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
			name: "relatedTechnologies",
			title: "Related Technologies",
			type: "array",
			of: [{ type: "reference", to: { type: "technology" } }],
		},
		{
			name: "relatedProjects",
			title: "Related Projects",
			type: "array",
			of: [{ type: "reference", to: { type: "project" } }],
		},
		{
			name: "header",
			title: "Header Image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Description",
				},
			],
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Description",
				},
			],
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],
};
