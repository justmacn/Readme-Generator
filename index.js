// This requires the local and third-party packages needed for this application
const generateMD = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions to prompt README inputs
const questions = [
    'Enter your project title:',
    'Enter a project description:',
    'Enter any installation instructions:',
    'Enter any project usage information:',
    'Enter any contribution guidelines:',
    'Enter your project test instructions:'
];

// TODO: Create a function to write README file
const writeREADME = (data) => {
    fs.writeFile('README-test.md', '', (error) =>
        error ? console.error(error) : console.log('README file successfully created')
);
    generateMD.generateMarkdown(data)
};

// TODO: Create a function to initialize app
function init() {
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
        }
    ])
    .then((answers) => {
        // console.log(answers);
        writeREADME(answers);
    }
    );
}

// Function call to initialize app
init();
