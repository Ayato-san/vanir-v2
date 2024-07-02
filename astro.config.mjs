import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import db from "@astrojs/db";
import auth from "auth-astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), db(), auth()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});