import { printSchema } from 'graphql';

import { schema } from './src/schema';

import type { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
  schema: printSchema(schema),
  documents: ["src/**/**/*.tsx", "src/**/*.tsx", "src/*.ts"],
  generates: {
    "./generated/gql/": {
      preset: "client",
      plugins: [],
    },
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
