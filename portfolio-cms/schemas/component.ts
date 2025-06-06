import {backgroundSchema} from '../utils/backgroundSchema'
import {buttonSchema} from '../utils/buttonSchema'
import {cardSchema} from '../utils/cardSchema'
import {imageSchema} from '../utils/imageSchema'
import {linksSchema} from '../utils/linksSchema'
import {variantSchema} from '../utils/varriantSchema'

export const component = [
  {
    name: 'component',
    title: 'Component',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the component',
      },
      {
        name: 'longDescription',
        title: 'Long Description',
        type: 'text',
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
      },
      variantSchema,
      cardSchema,
      imageSchema,
      linksSchema,
      buttonSchema,
      backgroundSchema,
    ],
  },
]
