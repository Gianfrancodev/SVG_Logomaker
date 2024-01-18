const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes")

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please provide three characters for the logo text:',
      validate: function (input) {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Provide a text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Provide a shape color (keyword or hexadecimal number):',
    },
  ]);
}