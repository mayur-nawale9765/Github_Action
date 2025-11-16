const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log("📌 Allure plugin LOADED");
      allureWriter(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.js"
  },
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
