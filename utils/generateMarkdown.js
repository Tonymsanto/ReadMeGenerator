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
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


`;
}

module.exports = generateMarkdown;