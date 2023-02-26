const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for the user
const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
        type: 'input'
      }
];
const fileName = "readmeTest.md"; // use test filenmame until we have the final version then change it to README.md!!!

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md file successfully created!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers); //getReadmeContent(answers); !!!
      writeToFile(fileName, readmeContent);
    });
}

// function to get the readme answers the user provided and generate the relevant markdown for the README.md file
function getReadmeContent(answers) {
    return `# ${answers.title}
    ## Table of Contents
    ...
`;
}

//start rhe ball rolling with a call to init
init();
