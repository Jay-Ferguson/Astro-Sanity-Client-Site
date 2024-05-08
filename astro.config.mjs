import { defineConfig } from 'astro/config';
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import {imageService} from '@unpic/astro/service';
import lottie from 'astro-integration-lottie'
import {loadEnv} from 'vite';

// const projectId = loadEnv(process.env.PROJECT_ID, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site:'https://wornockwood.com',
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
  integrations: [react(), lottie(), sanityIntegration({
    projectId: '9gy3ebd9',
    dataset: "production",
    //set 
    useCdn: false
  })
]
});