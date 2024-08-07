import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";
import lottie from "astro-integration-lottie";
import favicons from "astro-favicons";
import partytown from "@astrojs/partytown";
import { loadEnv } from "vite";

// const projectId = loadEnv(process.env.PROJECT_ID, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://warnockcabinetry.ca",
  output: "static",
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
      masterPicture: "./src/images/favicon.png",
      emitAssets: true,
      orientation: "any",
      appleStatusBarStyle: "black-translucent",
    }),
    partytown(),
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
