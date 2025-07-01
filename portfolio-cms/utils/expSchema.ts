import {imageSchema} from './imageSchema'
import {linksSchema} from './linksSchema'
import {listOfExperiences} from './listOfExperiences'

export const expschema = {
  name: 'experience',
  title: 'Experience',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'companyName',
          title: 'Company Name',
          type: 'string',
        },
        {
          name: 'jobType',
          title: 'Job Type',
          type: 'string',
        },
        {
          name: 'workMode',
          title: 'Work Mode',
          type: 'string',
        },
        {
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
        },
        {
          name: 'endDate',
          title: 'End Date',
          type: 'date',
        },
        {
          name: 'present',
          title: 'Present',
          type: 'boolean',
        },
        imageSchema,
        linksSchema,
        listOfExperiences,
      ],
    },
  ],
}
