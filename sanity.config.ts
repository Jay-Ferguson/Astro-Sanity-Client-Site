// sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "<YOUR-PROJECT-ID>",
  dataset: "<YOUR-DATASET-NAME>",
  plugins: [deskTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
});
