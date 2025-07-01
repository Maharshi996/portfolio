export const listOfExperiences = {
  name: 'experience',
  title: 'Experience',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'role',
          title: 'Role Name',
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
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        {
          name: 'richDescription',
          title: 'Rich Description',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
  ],
}
