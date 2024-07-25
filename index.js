// Requires the local and third-party packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions to prompt README inputs
const questions = [
    generateMarkdown.changeColor('magenta','Enter your project title:'),
    generateMarkdown.changeColor('magenta','Enter a project description:'),
    generateMarkdown.changeColor('magenta','Enter any installation instructions:'),
    generateMarkdown.changeColor('magenta','Enter any project usage information:'),
    generateMarkdown.changeColor('magenta','Enter any contribution guidelines:'),
    generateMarkdown.changeColor('magenta','Enter your project test instructions:'),
    generateMarkdown.changeColor('magenta','Enter your Github username:'),
    generateMarkdown.changeColor('magenta','Enter your email address:'),
    generateMarkdown.changeColor('magenta','Select a project license:'),
];

// This expression uses the fs core module to create the README file
const writeREADME = (data) => {
    fs.writeFile('README.md', '', (error) => 
        error ? console.error(generateMarkdown.changeColor('red', error)) : console.log(generateMarkdown.changeColor('yellow', 'README.md successfully created'))
    );

    // Call our appendFile functions from the generateMarkdown local module 
    generateMarkdown.generateMarkdown(data);
    generateMarkdown.renderLicenseSection(data);
};

// This function initializes the app in the command line
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
};

// This calls our initialize function
init();