const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./cypress/cucumber-reports/",
  metadata: {
    browser: {
      name: "chrome",
    },
    device: "Local test machine",
    platform: {
      name: "Windows 10 PRO",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Demo BAC Cypress Frontend POM" },
      { label: "Release", value: "1.0.1" },
    ],
  },
});