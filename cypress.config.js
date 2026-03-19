const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // Plugin Cucumber
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Preprocessor avec esbuild
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    timestamp: false
  },
  e2e: {
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.feature"],
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    stepDefinitions: "cypress/e2e/**/*.ts",
    setupNodeEvents, // ✅ seul setupNodeEvents nécessaire
    video: true,
    screenshotOnRunFailure: true
  }
});