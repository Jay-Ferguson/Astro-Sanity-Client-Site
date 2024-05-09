import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import {imageService} from '@unpic/astro/service';
import lottie from 'astro-integration-lottie'
import {loadEnv} from 'vite';

// const projectId = loadEnv(process.env.PROJECT_ID, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site:'https://warnockcabinetry.com',
  output:'static',
  prefetch:true,
  base:'/',
  image:{
    service: imageService({
      fallbackService: 'netlify',
      placeholder: 'blurhash',
      layout:'constrained',
      
    })
  },
  integrations: [sitemap(),react(), lottie(), sanityIntegration({
    projectId: '9gy3ebd9',
    dataset: "production",
    //set 
    useCdn: false
  })
]
});