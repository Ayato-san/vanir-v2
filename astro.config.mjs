import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import db from "@astrojs/db";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), db(), auth()]
});