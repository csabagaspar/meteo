import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./forcastSchema.yaml",
  apiFile: "./baseApi.ts",
  apiImport: "baseApi",
  outputFile: "./forcastApi.ts",
  exportName: "forcastApi",
  hooks: true,
};

export default config;
