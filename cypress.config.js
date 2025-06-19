const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://bug-test-swart.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
