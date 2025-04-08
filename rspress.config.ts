import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: "/jp-note",
  globalStyles: path.join(__dirname, 'docs/index.css'),
  root: path.join(__dirname, 'docs'),
  logo: '/logo.png',
  icon: '/logo.png',
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    outlineTitle: 'TOC',
  },
});
