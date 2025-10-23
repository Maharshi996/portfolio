import {componentTypes} from './component-types'
export const variantSchema = {
  name: 'variant',
  title: 'Variant',
  type: 'string',
  options: {
    list: [...componentTypes],
  },
  layout: 'dropdown',
  description: 'A dropdown field with name and value',
}
