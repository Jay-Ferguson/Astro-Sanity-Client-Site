import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {media} from 'sanity-plugin-media'

const SANITY_STUDIO_PREVIEW_URL = 'https://www.warnockcabinetry.ca' || 'http://localhost:4321/'

export default defineConfig({
  name: 'default',
  title: 'Warnock Cabinetry',

  projectId: '9gy3ebd9',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    media(),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      title: 'Website Preview',
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Website Deploy',
              apiId: 'bb377697-7601-4d2f-8ba9-9b10ff19ac51',
              buildHookId: 'https://api.netlify.com/build_hooks/6634ecbe0e479a2c199cf2e9',
              name: 'webdeploy',
              url: 'https://www.warnockcabinetry.com',
              branch:'main',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
