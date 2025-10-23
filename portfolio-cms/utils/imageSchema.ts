export const imageSchema = {
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
}
