import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "poxxqfti",
  dataset: "production",
  title: "Next Sanity Studio",
  apiVersion: "2023-04-24",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
