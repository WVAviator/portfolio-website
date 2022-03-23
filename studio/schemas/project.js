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
			name: "mobileView",
			title: "Mobile View",
			type: "image",
			description: "What the project looks like on mobile. Should be 3/5 aspect ratio.",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternate Text",
				},
			],
		},
		{
			name: "desktopView",
			title: "Desktop View",
			description:
				"What the project looks like on desktop. Should be 16/10 aspect ratio.",
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
