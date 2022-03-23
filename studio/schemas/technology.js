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
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternate Text",
				},
			],
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
					title: "Alternate Text",
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
