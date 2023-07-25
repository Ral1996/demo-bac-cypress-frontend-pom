const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

const CryptoJS = require('crypto-js');

// Desencriptamos ParamBase64
var paramBase64 = (param) => {
    return CryptoJS.enc.Base64.parse(param).toString(CryptoJS.enc.Utf8);
}

// Desencriptamos BaseURL64
var baseUrl = (host) => {
  return CryptoJS.enc.Base64url.parse(host).toString(CryptoJS.enc.Utf8);
}

module.exports = defineConfig({
  // implement node event listeners here 
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporte-API-Testing',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on),
      on('file:preprocessor', cucumber());
    },
    specPattern: "cypress/e2e/*.feature",
  },
  env: {
    userAccess: paramBase64('c3R1ZGVudA'),
    passAccess: paramBase64('UGFzc3dvcmQxMjM'),
    baseUrl: baseUrl('aHR0cHM6Ly9wcmFjdGljZXRlc3RhdXRvbWF0aW9uLmNvbS9wcmFjdGljZS10ZXN0LWxvZ2luLw')
  },
});
