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

function generateLogo() {
    promptUser().then(answers => {
      const { text, textColor, shape, shapeColor } = answers;
      let logo;
  
      switch (shape) {
        case 'Circle':
          logo = new Circle();
          break;
        case 'Triangle':
          logo = new Triangle();
          break;
        case 'Square':
          logo = new Square();
          break;
        default:
          console.log('Invalid shape selection.');
          return;
      }

      logo.setColor(shapeColor);
      logo.setTextColor(textColor);
      logo.setText(text);

      const svg = logo.render();
      const logoPath = "./examples/logo.svg";

      fs.writeFile(logoPath, svg, err => {
        if (err) {
          console.error('An error occurred while generating the logo:', err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    });
  }
  
  generateLogo();