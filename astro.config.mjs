// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.example.com",
  base: "/",
  trailingSlash: "always",
  integrations: [alpinejs()],

  vite: {
    plugins: [tailwindcss()],
  },
});
