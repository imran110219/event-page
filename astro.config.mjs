import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.summitorganization.org',
  integrations: [tailwind({ applyBaseStyles: false })]
});
