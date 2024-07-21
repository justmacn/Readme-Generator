// This requires the fs core module needed to run these functions
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenses = [
    "None",
    "Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License",
    "BSD 2-Clause 'Simplified' License",
    "BSD 3-Clause 'New' or 'Revised' License",
    "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
    "The Unlicense"
  ];

  const licenseLinks = [
    "", // None
    "https://www.apache.org/licenses/LICENSE-2.0", // Apache License 2.0
    "https://www.gnu.org/licenses/gpl-3.0.html", // GNU General Public License v3.0
    "https://opensource.org/licenses/MIT", // MIT License
    "https://opensource.org/licenses/BSD-2-Clause", // BSD 2-Clause 'Simplified' License
    "https://opensource.org/licenses/BSD-3-Clause", // BSD 3-Clause 'New' or 'Revised' License
    "https://www.boost.org/users/license.html", // Boost Software License 1.0
    "https://creativecommons.org/publicdomain/zero/1.0/", // Creative Commons Zero v1.0 Universal
    "https://www.eclipse.org/legal/epl-2.0/", // Eclipse Public License 2.0
    "https://www.gnu.org/licenses/agpl-3.0.html", // GNU Affero General Public License v3.0
    "https://www.gnu.org/licenses/gpl-2.0.html", // GNU General Public License v2.0
    "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html", // GNU Lesser General Public License v2.1
    "https://www.mozilla.org/en-US/MPL/2.0/", // Mozilla Public License 2.0
    "http://unlicense.org/" // The Unlicense
  ];
  
  switch (license.license) {
    case licenses[0]:
      return '';

    case licenses[1]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[1]}\n](${licenseLinks[1]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[2]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[2]}\n](${licenseLinks[2]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[3]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[3]}\n](${licenseLinks[3]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[4]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[4]}\n](${licenseLinks[4]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[5]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[5]}\n](${licenseLinks[5]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[6]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[6]}\n](${licenseLinks[6]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[7]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[7]}\n](${licenseLinks[7]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[8]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[8]}\n](${licenseLinks[8]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[9]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[9]}\n](${licenseLinks[9]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[10]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[10]}\n](${licenseLinks[10]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[11]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[11]}\n](${licenseLinks[11]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[12]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[12]}\n](${licenseLinks[12]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
    
    case licenses[13]:
      fs.appendFile('README-test.md', `
      This application is licensed under the [${licenses[13]}\n](${licenseLinks[13]})
      `, (err) => {
        if(err) {
          console.error(err);
        }
      });
      break;
  }
  
}

// This function populates the README with markdown from user inputs
function generateMarkdown(data) {
  // This module appends the user inputs to the README file
  fs.appendFile('README-test.md', `
  # ${toTitleCase(data.title.trim())} + ${renderLicenseBadge(data.license)}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n
  - [License](#license)
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
  ## License\n
  `, (err) =>
    err ? console.error(err) : console.log('README successfully generated')
  );
}

// This function sets users inputs to Title Case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// export the above module functions as an object to require in index.js
module.exports = {
  generateMarkdown,
  renderLicenseSection,
  toTitleCase
}