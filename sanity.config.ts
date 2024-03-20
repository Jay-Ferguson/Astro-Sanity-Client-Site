// sanity.config.ts
import { defineConfig } from "sanity";
// @ts-ignore
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "<YOUR-PROJECT-ID>",
  dataset: "<YOUR-DATASET-NAME>",
  plugins: [media(), structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
});
