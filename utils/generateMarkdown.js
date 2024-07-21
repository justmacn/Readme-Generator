// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const fs = require('fs');

  fs.appendFile('README-test.md', `
  # ${data.title}\n
  ## Description\n
  ${data.description}\n
  ## Installation\n
  ${data.install}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributing\n
  ${data.contribute}\n
  ## Tests\n
  ${data.test}\n
  `, (err) =>
    err ? console.error(err) : console.log('README successfully generated')
  );
}

// export the above module functions as an object to require in index.js
module.exports = {
  generateMarkdown
}