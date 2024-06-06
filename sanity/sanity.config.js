import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'

const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3333'

export default defineConfig({
  name: 'default',
  title: 'Warnock Cabinetry',

  projectId: '9gy3ebd9',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), presentationTool({
    previewUrl: SANITY_STUDIO_PREVIEW_URL,
  })],

  schema: {
    types: schemaTypes,
  },
})
