import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import auth from "auth-astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), auth()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});