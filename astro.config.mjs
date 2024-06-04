import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";
import lottie from "astro-integration-lottie";
import favicons from "astro-favicons";
import { loadEnv } from "vite";

// const projectId = loadEnv(process.env.PROJECT_ID, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://warnockcabinetry.com",
  output: "static",
  adapter: netlify(),
  prefetch: true,
  base: "/",
  lang: "en-CA",
  image: {
    service: imageService({
      fallbackService: "netlify",
      placeholder: "blurhash",
      layout: "constrained",
    }),
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    favicons({
      masterPicture: "../astro-site/public/favicon.svg",
      emitAssets: true,
      orientation: "any",
      appleStatusBarStyle: "black-translucent",
    }),
    react(),
    lottie(),
    sanityIntegration({
      projectId: "9gy3ebd9",
      dataset: "production",
      //set
      useCdn: false,
    }),
  ],
});
