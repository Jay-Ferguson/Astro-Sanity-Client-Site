import { defineConfig } from 'astro/config';
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanityIntegration({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET_ID,
    //set 
    useCdn:false
  })]
});