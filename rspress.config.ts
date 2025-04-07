import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: "/jp-note",
  root: path.join(__dirname, 'docs'),
  icon: './imgs/icon.ico',
  logoText: 'JP-Note',
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    outlineTitle: 'TOC',
    lastUpdated: true,
  },
});
