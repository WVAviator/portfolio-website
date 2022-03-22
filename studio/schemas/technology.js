export default {
	name: "technology",
	title: "Technology",
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
			name: "logo",
			title: "Logo",
			type: "image",
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
