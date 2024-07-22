// Requires the modules needed to run these functions
const colors = require('colors/safe');
const fs = require('fs');

// This function renders a link to the license section in the Table of Contents
function renderLicenseLink(data) {

  // Declare both verisons of user inputs as variables
  const licenseY = `
  # ${data.title.trim()} ${renderLicenseBadge(data.license)}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n
  - [License](#license)\n
  ## Installation\n
  ${data.install}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributing\n
  ${data.contribute}\n
  ## Tests\n
  ${data.test}\n
  ## Questions\n
  For any additional questions you can reach me at:\n
  - Github: [${data.username.trim()}](https://github.com/${data.username.trim()})\n
  - Email: ${data.email.trim()}\n
  ## License\n
  `

  const licenseN = `
  # ${data.title.trim()} ${renderLicenseBadge(data.license)}\n
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
  For any additional questions you can reach me at:\n
  - Github: [${data.username.trim()}](https://github.com/${data.username.trim()})\n
  - Email: ${data.email.trim()}\n
  `
  // A conditional to determine whcih variable to append to the markdown, whether or not a license was selected
  if (data.license === 'None') {
    return licenseN;
  } else {
    return licenseY;
  }

};

// This functions renders the license badge to the top of the README
function renderLicenseBadge(license) {

  //An array of all the license options
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

  // An array of image links to each license badge, styled to float right
  const badgeLinks = [
    "", // None
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)</div>`, // Apache License 2.0
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)</div>`, // GNU General Public License v3.0
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</div>`, // MIT License
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)</div>`, // BSD 2-Clause 'Simplified' License
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)</div>`, // BSD 3-Clause 'New' or 'Revised' License
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)</div>`, // Boost Software License 1.0
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)</div>`, // Creative Commons Zero v1.0 Universal
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)</div>`, // Eclipse Public License 2.0
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)</div>`, // GNU Affero General Public License v3.0
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)</div>`, // GNU General Public License v2.0
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)</div>`, // GNU Lesser General Public License v2.1
    ` <div style="float: right;">[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)</div>`, // Mozilla Public License 2.0
    ` <div style="float: right;">[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)</div>` // The Unlicense
  ];

  // A switch statement to select with badge image link to return
  switch (license) {
    case licenses[0]:
      return badgeLinks[0];

    case licenses[1]:
      return badgeLinks[1];


    case licenses[2]:
      return badgeLinks[2];


    case licenses[3]:
      return badgeLinks[3];


    case licenses[4]:
      return badgeLinks[4];


    case licenses[5]:
      return badgeLinks[5];


    case licenses[6]:
      return badgeLinks[6];


    case licenses[7]:
      return badgeLinks[7];


    case licenses[8]:
      return badgeLinks[8];


    case licenses[9]:
      return badgeLinks[9];


    case licenses[10]:
      return badgeLinks[10];


    case licenses[11]:
      return badgeLinks[11];


    case licenses[12]:
      return badgeLinks[12];


    case licenses[13]:
      return badgeLinks[13];
  }
};

// This function appends the correct license notice and link to the README
function renderLicenseSection(license) {

  //An array of all the license options
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

  // An array of links to the license
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

  // A switch statement to select which license link to make hypertext
  switch (license.license) {
    case licenses[0]:
      return '';

    case licenses[1]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[1]}](${licenseLinks[1]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[2]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[2]}](${licenseLinks[2]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[3]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[3]}](${licenseLinks[3]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[4]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[4]}](${licenseLinks[4]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[5]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[5]}](${licenseLinks[5]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[6]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[6]}](${licenseLinks[6]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[7]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[7]}](${licenseLinks[7]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[8]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[8]}](${licenseLinks[8]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[9]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[9]}](${licenseLinks[9]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[10]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[10]}](${licenseLinks[10]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[11]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[11]}](${licenseLinks[11]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[12]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[12]}](${licenseLinks[12]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;

    case licenses[13]:
      fs.appendFile('README-test.md', `This application is licensed under the [${licenses[13]}](${licenseLinks[13]})`, (err) => {
        if (err) {
          console.error(changeColor('red', err));
        }
      });
      break;
  }

};

// This function populates the README with markdown from user inputs
function generateMarkdown(data) {

  // This module appends the user inputs to the README file
  fs.appendFile('README-test.md', `
  ${renderLicenseLink(data)}
  `, (err) =>
    err ? console.error(changeColor('red', err)) : console.log(changeColor('green', 'README successfully generated'))
  );
};

// This function changes the color of the console logs
function changeColor(color, text) {

  // Declare parameters as variables
  const col = color
  const txt = text

  // Switch statement to determine text color
  switch (col) {
    case 'green':
      return colors.green(txt);


    case 'yellow':
      return colors.yellow(txt);

    case 'red':
      return colors.red(txt);
  }
};

// Export the above module functions as an object to require in index.js
module.exports = {
  generateMarkdown,
  renderLicenseSection,
  changeColor,
};