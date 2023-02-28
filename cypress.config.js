const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://api2.ploomes.com',
    $schema: "https://on.cypress.io/cypress.schema.json",
    specPattern: "cypress/e2e",
  },  
});
