// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license == "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license == "Eclipse Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)"
  }
  else if (license == "Attribution-NonCommmercial-ShareAlike 4.0 International") {
    return "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)"
  }
  else if (license == "The Do What the F You Want to Public License") {
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }
  else {
    return "NO LICENSE NEEDED"
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)"
  }
  else if (license == "Apache 2.0 License") {
    return "(https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license == "Eclipse Public License 2.0") {
    return "(https://opensource.org/licenses/EPL-2.0)"
  }
  else if (license == "Attribution-NonCommmercial-ShareAlike 4.0 International") {
    return "(https://creativecommons.org/licenses/by-nc-nd/4.0/)"
  }
  else if (license == "The Do What the F You Want to Public License") {
    return "(http://www.wtfpl.net/about/)"
  }
  else {
    return "No license needed"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ##  Table of contents.

  -*- [Discription](#Discription)
   
  -*- [Usage](#Usage)

  -*- [Installation](#Installation)

  -*- [License](#License)
  
  -*- [Contributors](#Contributors)

  -*- [Test](#Test)
   
  -*- [Questions](#Questions) 


  ##  Discription
    ${data.discrpt}

  ##  Usage
    ${data.usage}

  ##  Installation
    ${data.install}

  ##  License
  Follow the link below for license info.

  ${renderLicenseLink(data.license)}

  ##  Contributors
    ${data.contributors}

  ##  Test
    ${data.test}
  
  ##  Questions
  Contact Information:
  ${data.gituser}
  [Github](http://github.com/${data.gituser})   
  Any questions please contact ${data.contactauthor} via email.
  ${data.contactemail}
  
  
`;
}

module.exports = generateMarkdown;
