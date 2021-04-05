// TODO: Include packages needed for this application
const inquirer = require("inquirer");// this is the use of the inquirer node.js
const fs = require("fs"); //this is the use of the file writing system for node .js
const generateMarkdown = require ("./generateMarkdown.js");// this is the markdown file being attached and working with this index.js

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "discrpt",
    message: "Describe this project",
  },
  {
    type: "input",
    name: "install",
    message: "How does the user install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "what is this product use for?",
  },
  {
    type: "input",
    name: "test",
    message: "How does the user run test?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors to this project?",
  },
  {
    type: "input",
    name: "gituser",
    message: "What is your github user name?",
  },
  {
    type: "list",
    name: "license",
    choices: ["MIT",
      "Apache 2.0 License",
      "Eclipse Public License 2.0",
      "Attribution-NonCommmercial-ShareAlike 4.0 International",
      "The Do What the F You Want to Public License",
      "NONE",
    ],
    message: "what license does the user need?",
  },
  {
    type: "input",
    name: "contactauthor",
    message: "Who is contact for questions regarding this project?",
  },
  {
    type: "input",
    name: "contactemail",
    message: "What is contact email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,(err) =>{
    if(err){
      throw err;
    } else {
     return  console.log("readMe was Created");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    const answers = generateMarkdown(responses);
   writeToFile("examplereadme.md",answers);
   
  });
}

// Function call to initialize app
init();


//////////////////////////////////////////////////////////////////////////////////////
//CHANGE THE NAME OF THE FILE IN THE FORTH LINE OF THE INIT FUNCTION FOR YOUR README//
//////////////////////////////////////////////////////////////////////////////////////