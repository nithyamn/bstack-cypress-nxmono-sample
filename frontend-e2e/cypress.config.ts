import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

// export default defineConfig({
//   e2e: {
//     ...nxE2EPreset(__filename, {
//       cypressDir: 'src',
//       webServerCommands: { default: 'nx run frontend:serve' },
//     }),
//     baseUrl: 'http://localhost:4200',
//   },
// });

module.exports = defineConfig({
  experimentalWebKitSupport: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run frontend:serve' },
    }),
    baseUrl: 'http://localhost:4200',
  },
});
