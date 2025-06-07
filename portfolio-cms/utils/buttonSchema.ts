export const buttonSchema = {
  name: 'buttons',
  title: 'Buttons',
  type: 'array',
  of: [
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'The label of the button',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          description: 'The URL the button links to',
        },
        {
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [
              {title: 'Primary', value: 'primary'},
              {title: 'Secondary', value: 'secondary'},
              {title: 'Tertiary', value: 'tertiary'},
            ],
          },
        },
      ],
    },
  ],
}
