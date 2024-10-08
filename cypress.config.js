const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'test-report',
    overwrite: true,
    html: true,   // Enable HTML report generation
    json: false   // Disable JSON report generation
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    }
  },
  video:true,
  screenshotOnRunFailure:true,
  retries:2
})
