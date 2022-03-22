export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
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
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "smallStub",
			title: "Small Stub Image",
			type: "image",
		},
		{
			name: "techStack",
			title: "Technologies Used",
			type: "array",
			of: [{ type: "reference", to: { type: "technology" } }],
		},
		{
			name: "header",
			title: "Header Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],
};
