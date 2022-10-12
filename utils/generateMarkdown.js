// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
        case "Apache 2.0":
            license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case "MIT":
            license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case "GNU GPLv3":
            license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        default:
            license = ``;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "Apache 2.0":
            license = `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case "GNU GPLv3":
            license = `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        default:
            license = ``;
            break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
    return `# ${response.title}
${renderLicenseBadge(response.license)}


## Description
${response.description}

## Table of Contents
  1. [Installation Instructions](#installation)
  2. [Usage Information](#usage)
  3. [Contribution Guidelines](#contribution)
  4. [Tests](#tests)
  5. [License information](#Licensing)
  6. [Questions](#questions)
  ## Installation
  ${response.installation}
  ## Usage
  ${response.usage}
  ## Contribution
  ${response.contribution}
  ## Tests
  ${response.tests}
  ## Licensing
  ${renderLicenseLink(response.license)}
  ## Questions
  If you have any further questions, 
   - You can email me at: ${response.email}
   - You can find my GitHub at: [${response.gituser}](https://github.com/${response.gituser})
`;
}

module.exports = generateMarkdown;