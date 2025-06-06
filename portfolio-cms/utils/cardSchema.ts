import {imageSchema} from './imageSchema'
import {linksSchema} from './linksSchema'

export const cardSchema = {
  name: 'card',
  title: 'Card',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Title of the card',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Description of the card',
        },
        imageSchema,
        linksSchema,
      ],
    },
  ],
}
