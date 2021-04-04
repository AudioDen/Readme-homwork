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
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##  Table of contents.

  -*- [Discription](#Discription)
   
  -*- [Usage](#Usage)

  -*- [Install](#Install)

  -*- [License](#License)
  
  -*- [Contributors](#Contributors)

  -*- [Test](#Test)
   
  -*- [Questions](#Questions) 


  ##  Discription
  ${data.discrpt}

  ##  Usage
  ${data.usage}

  ##  License
  ${renderLicenseBadge(data.license)}

  ##  Contributors
  ${data.contributors}

  ##  Test
  ${data.test}
  
  ##  Questions

        Contact Information:
        git hub user name: ${data.gituser}
       
        Any questions please contact via email.
        ${data.contactauthor}
        ${data.contactemail}
`;
}

module.exports = generateMarkdown;
