import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: './qa-results/test-artifacts',
  reporter: [['list'], ['json', { outputFile: './qa-results/results.json' }]],
  use: { baseURL: 'http://127.0.0.1:4322', browserName: 'chromium', channel: 'chrome', screenshot: 'only-on-failure' },
  webServer: { command: 'npm run preview -- --port 4322', url: 'http://127.0.0.1:4322', reuseExistingServer: false },
});
