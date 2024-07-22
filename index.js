// This requires the local and third-party packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions to prompt README inputs
const questions = [
    'Enter your project title:',
    'Enter a project description:',
    'Enter any installation instructions:',
    'Enter any project usage information:',
    'Enter any contribution guidelines:',
    'Enter your project test instructions:',
    'Enter your Github username:',
    'Enter your email address:',
    'Select a project license:',
];

// This function to write README file
const writeREADME = (data) => {
    fs.writeFile('README-test.md', '', (error) =>
        error ? console.error(generateMarkdown.changeColor('red', error)) : console.log(generateMarkdown.changeColor('yellow', 'README.md successfully created'))
    );
    generateMarkdown.generateMarkdown(data);
    generateMarkdown.renderLicenseSection(data);
};

// This function initializes the app in node
function init() {
    // Runs the inquirer module to propmt user for markdown inputs
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "description",
        },
        {
            type: "input",
            message: questions[2],
            name: "install",
        },
        {
            type: "input",
            message: questions[3],
            name: "usage",
        },
        {
            type: "input",
            message: questions[4],
            name: "contribute",
        },
        {
            type: "input",
            message: questions[5],
            name: "test",
        },
        {
            type: "input",
            message: questions[6],
            name: "username",
        },
        {
            type: "input",
            message: questions[7],
            name: "email",
        },
        {
            type: "list",
            message: questions[8],
            name: "license",
            choices: [
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
            ],
        }
    ])
        .then((answers) => writeREADME(answers));
}

// Function call to initialize app
init();
