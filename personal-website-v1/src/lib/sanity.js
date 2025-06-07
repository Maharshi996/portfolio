import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: '69o760na', // from sanity.json or studio config
  dataset: 'production',
  useCdn: true, // `false` if you want real-time fresh data
  apiVersion: '2023-01-01', // use today's date or schema date
})

export default sanity