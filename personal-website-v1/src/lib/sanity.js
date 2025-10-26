import { createClient } from '@sanity/client'

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID
const dataset = process.env.REACT_APP_SANITY_DATASET
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION || '2023-01-01'
const useCdn = process.env.REACT_APP_SANITY_USE_CDN !== 'false'

export const sanity = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion,
})

export default sanity