// This requires the fs core module needed to run these functions
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// This function populates the README with markdown from user inputs
function generateMarkdown(data) {
  // This module appends the user inputs to the README file
  fs.appendFile('README-test.md', `
  # ${data.title.trim()}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n
  ## Installation\n
  ${data.install}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributing\n
  ${data.contribute}\n
  ## Tests\n
  ${data.test}\n
  ## Questions\n
  #### For any additional questions you can reach me at:\n
  - Github: [${data.username.trim()}](https://github.com/${data.username.trim()})\n
  - Email: ${data.email.trim()}\n
  `, (err) =>
    err ? console.error(err) : console.log('README successfully generated')
  );
}

// export the above module functions as an object to require in index.js
module.exports = {
  generateMarkdown
}