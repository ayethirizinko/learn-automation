const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    // defaultCommandTimeout:4000,
    // execTimeout:60000,
    // taskTimeout:60000,
    // pageLoadTimeout:60000,
    // requestTimeout:5000,
    // responseTimeout:30000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
