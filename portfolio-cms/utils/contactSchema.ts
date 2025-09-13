import {buttonSchema} from './buttonSchema'

export const contactSchema = {
  name: 'contact',
  title: 'Contact',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'hidden',
          title: 'Hidden',
          type: 'boolean',
          description: 'Is this contact component hidden? Useful for drafts or future updates.',
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          description:
            'The name of the contact component (e.g., "Contact Form", "Support Section")',
        },
        {
          name: 'tabs',
          title: 'Tabs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'tabName',
                  title: 'Tab Name',
                  type: 'string',
                  description: 'Name of the contact tab (e.g., "Contact Us", "Support")',
                },
                {
                  name: 'inputFields',
                  title: 'Input Fields',
                  type: 'array',
                  of: [
                    {
                      name: 'inputField',
                      title: 'Input Field',
                      type: 'object',
                      fields: [
                        {
                          name: 'label',
                          title: 'Label',
                          type: 'string',
                          description: 'Label for the input field (e.g., "Name", "Email")',
                        },
                        {
                          name: 'type',
                          title: 'Type',
                          type: 'string',
                          options: {
                            list: [
                              {title: 'Text', value: 'text'},
                              {title: 'Email', value: 'email'},
                              {title: 'Phone', value: 'phone'},
                              {title: 'Textarea', value: 'textarea'},
                            ],
                          },
                        },
                        {
                          name: 'required',
                          title: 'Required',
                          type: 'boolean',
                          description: 'Is this field required?',
                        },
                        {
                          name: 'placeholder',
                          title: 'Placeholder',
                          type: 'string',
                          description: 'Placeholder text for the input field',
                        },
                        {
                          name: 'errorMessage',
                          title: 'Error Message',
                          type: 'string',
                          description: 'Error message to display if validation fails',
                        },
                      ],
                    },
                  ],
                },
                buttonSchema,
              ],
            },
          ],
          options: {
            collapsible: true,
            collapsed: false,
          },
        },
      ],
    },
  ],
}
