const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://api2.ploomes.com',
    $schema: 'https://on.cypress.io/cypress.schema.json',
    specPattern: 'cypress/e2e',
    defaultCommandTimeout: 20000, 
    
  }, 
  urlFront: 'https://app10.ploomes.com/',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
        "reportDir": "mochawesome-report",
        "quiet": true,
        "overwrite": false,
        "html": false,
        "json": true,
        "reportTitle": "RELATÓRIO DE EXECUÇÃO DE TESTES - PLOOMES"
    }
  }
});
