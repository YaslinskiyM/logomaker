  const inquirer = require('inquirer');
  const fs = require('fs');
  const { Circle, Triangle, Square } = require('./lib/shapes');
  
  class Svg{
      constructor(){
          this.textElement = ''
          this.shapeElement = ''
      }
  
      render(){
          return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
              ${this.shapeElement}
              <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textElement}">${this.textElement}</text>
          </svg>`;
      }
  
      setTextElement(text, color){
          this.textElement = text;
          this.textColor = color;
      }
  
      setTextElement(text, color) {
          this.textElement = `text x"150" y="125" font-size"55" text-anchor="middle" fill="${color}">${text}</text>` ; 
      }
  
      setShapeElement(shape) {
          this.shapeElement = shape.render();
      }
  }
  
  const questions = [
      { 
          type: 'input',
          name: 'text',
          message: 'Enter text for the logo (3 character)',
      },
  
      {
          type: 'input',
          name: 'textColor',
          message: 'Enter color for text',
      },
  
      {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color',
      },
  
      {
          type: 'list',
          name: 'shape',
          message: 'Choose which you would like to use?',
          choices: [
              "Circle",
              "Square",
              "Triangle"
          ]
      },
    
  ];
    
  // function to create the logo.svg file in logo directory
  inquirer.prompt(questions).then((answers) => {
      fs.writeFile('./logo/logo.svg', generateSVG(answers), (err) => {
          err ? console.log(err) : console.log("Success!", "Generated logo.svg")
      });
  });
  
  // function to generate the SVG Logo
  const generateSVG = ({text, textColor, shape, shapeColor}) => {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
          ${generateShapeSVG(shape, shapeColor)}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
  };
    
  // function to generate the shape of the SVG
  const generateShapeSVG = (shape, shapeColor) => {
      switch(shape){
          case 'Circle':
              return new Circle(shapeColor).render();
          case 'Triangle':
              return new Triangle(shapeColor).render();
          case 'Square':
              return new Square(shapeColor).render();
          default:
      }
  }; 

  module.exports = Svg;