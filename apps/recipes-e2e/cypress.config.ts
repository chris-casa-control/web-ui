const { nxE2EPreset } = require('@nx/cypress/plugins/cypress-preset');
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'pnpm exec nx run recipes-ui:serve',
        production: 'pnpm exec nx run recipes-ui:serve-static',
      },
      ciWebServerCommand: 'pnpm exec nx run recipes-ui:serve-static',
      ciBaseUrl: 'http://localhost:4210',
    }),
    baseUrl: 'http://localhost:4210',
  },
});
