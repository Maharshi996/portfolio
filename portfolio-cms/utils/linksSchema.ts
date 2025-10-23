export const linksSchema = {
  name: 'links',
  title: 'Links',
  type: 'array',
  of: [
    {
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Path',
          type: 'string',
          description: 'The URL of the link',
        },
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'The label for the link',
        },
      ],
    },
    {
      name: 'linkWithImage',
      title: 'Link With Image',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Path',
          type: 'string',
          description: 'The URL of the link',
        },
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'The label for the link',
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              name: 'largeImage',
              title: 'Large Image',
              property: 'desktop',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'shortImage',
              title: 'Short Image',
              property: 'mobile',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
