const fs = require("fs"); // filesystem handle, from npm package - fs
const inquirer = require("inquirer"); // to get user input via the CLI, from npm package - inquirer
const generateMarkdown = require("./utils/generateMarkdown"); // local modules (functions) for populating the readme file with content


// array of questions for the user
const questions = [
    {
      name: 'title',
      message: 'What is the title of your project?',
      type: 'input'
    },
    {
      name: 'description',
      message: 'Enter a brief description of your project:',
      type: 'input'
    },
    {
      name: 'installation',
      message: 'Enter installation instructions for your project:',
      type: 'input'
    },
    {
      name: 'usage',
      message: 'Enter usage instructions for your project:',
      type: 'input'
    },
    {
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'Unlicensed', 'Total Freedom'],
      type: 'list'
    },
    {
      name: 'licenseAuthor',
      message: 'Enter the author of the license text for your project:',
      type: 'input'
    },
    {
      name: 'contributions',
      message: 'Enter contribution guidelines for your project:',
      type: 'input'
    },
    {
      name: 'tests',
      message: 'Enter the type of tests carried out in this project:',
      type: 'input'
    },
    {
      name: 'github',
      message: 'Enter your Github username:',
      type: 'input'
    },
    {
      name: 'email',
      message: 'Enter your email:',
      type: 'input'
    },
    { // this was inserted after the video clip was made! as it made sense to have the user create a filename
      name: 'filename',
      message: 'Enter the filename you want to use (default: README.md):',
      type: 'input'
    }
];
//const fileName = "README.md"; // use test filenmame until we have the final version then change it to README.md!!!

// function to write README file to disk
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md file successfully created!')
    );
}

// function to initialize program
function init() {
  // inquirer prompts the user to answer the questions from the questions array
  // and once all answered, then call the generateMarkdown function to render the correct content
  inquirer.prompt(questions).then((answers) => {
    let fileName = "";
    answers.filename !== "" ? fileName = answers.filename : fileName = "README.md";
    const readmeContent = generateMarkdown(answers); // this will populate the contents of the readme file
    writeToFile(fileName, readmeContent);
  });
}

//start the ball rolling with a call to init
init();
