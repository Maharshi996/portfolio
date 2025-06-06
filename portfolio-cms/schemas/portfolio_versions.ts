import {Rule, SchemaTypeDefinition} from 'sanity'
import {component} from './component'

const portfolioVersions: SchemaTypeDefinition = {
  name: 'portfolioVersions',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Version',
      type: 'string',
      description: 'Version name or number',
      validation: (rule: Rule) => rule.required().min(1).max(50),
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this version active?',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the portfolio version',
      validation: (rule: Rule) => rule.max(200),
    },

    {
      name: 'compoenents',
      title: 'Components',
      type: 'array',
      of: [...component],
    },

    {
      name: 'SEO',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
          description: 'SEO title for the portfolio version',
          validation: (rule: Rule) => rule.max(70),
        },
        {
          name: 'description',
          title: 'SEO Description',
          type: 'text',
          description: 'SEO description for the portfolio version',
          validation: (rule: Rule) => rule.max(160),
        },
        {
          name: 'keywords',
          title: 'SEO Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Keywords for SEO optimization',
        },
      ],
    },

    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss',
        calendarTodayLabel: 'Today',
      },
    },
  ],
}

export default portfolioVersions
