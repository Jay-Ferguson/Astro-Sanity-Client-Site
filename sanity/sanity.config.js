import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {umamiTool} from 'sanity-plugin-umami-analytics-tool'
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
    umamiTool({
      title: 'Analytics',
      url: 'https://cloud.umami.is/share/bndsco0iKnm0c7av/www.warnockcabinetry.ca',
      //example: https://eu.umami.is/share/XXXX/XXXX
    }),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      title: 'Website Preview',
    }),
    dashboardTool({
      name: 'dashboard',
      title: 'Dashboard Tools',
      widgets: [
        netlifyWidget({
          layout: 'medium',
          title: 'My Netlify deploys',
          description: 'deploys Warnock Cabinetry website with all published changes',
          sites: [
            {
              title: 'Warnock Website Deploy',
              siteId: 'cdeaf534-e38d-47f0-8af6-c9302cfc8705',
              apiId: 'bb377697-7601-4d2f-8ba9-9b10ff19ac51',
              buildHookId: '6689be2ee539312d68508f64',
              name: 'webdeploy',
              url: 'https://www.warnockcabinetry.ca',
              branch: 'main',
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
