import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { projectId, dataset } from './src/sanity/env'
import { schema } from './src/sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
  ],
})
