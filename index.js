// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
    message: 'What is the title of the project?',
    type: 'input',
    name: 'title',
    },
    {
    message: 'What is the description of your project?',
    type: 'input',
    name: 'description',
    },
    {
    message: 'What are the installation instructions for your project?',
    type: 'input',
    name: 'installation',
    },
    {
    message: 'How is this project used?',
    type: 'input',
    name: 'usage',
    },
    {
    message: 'Please outline the contributions for the project?',
    type: 'input',
    name: 'contributions',
    },
    {
    message: 'What are the testing instructions for this project?',
    type: 'input',
    name: 'tests',
    },
    {
    message: 'What is your GitHub username?',
    type: 'input',
    name: 'gituser',
    },
    {
    message: 'What is your email address?',
    type: 'input',
    name: 'email',
    },
    {
    message: 'Please choose a license for this project.',
    type: 'list',
    choices: ["Apache 2.0", "MIT", "GNU GPLv3"],
    name: 'license',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
    console.log(response)
})
    .catch(err=> console.log(err))
}

// Function call to initialize app
init();
