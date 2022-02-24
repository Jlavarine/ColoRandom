//classes 👇
class Color {
  constructor() {
  this.hex = `#${generateHexCode()}`;
  this.locked = false;
  }
}

class Palette {
  constructor() {
    this.boxes = [new Color(), new Color(), new Color(), new Color(), new Color()];
    this.id = Date.now();
  }

  lockColor(i) {
    this.boxes[i].locked = true;
  }
}

//global variables 👇
var newPaletteButton = document.querySelector('.new-palette');
var colorBox1 = document.querySelector('.color-1');
var colorBox2 = document.querySelector('.color-2');
var colorBox3 = document.querySelector('.color-3');
var colorBox4 = document.querySelector('.color-4');
var colorBox5 = document.querySelector('.color-5');
var colorBoxes = document.querySelectorAll('.color-format');
var test;

var hexData = ['A','B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var savedPalettes = []; // will hold objects

//event listeners 👇
newPaletteButton.addEventListener('click', replaceColor)
window.addEventListener('load', displayNewColors);

// functions and event handlers 👇
function displayNewColors() {
  test = new Palette();
  for (var i = 0; i < test.boxes.length; i++) {
    if (test.boxes[i].locked === false) {
      colorBoxes[i].style.backgroundColor = test.boxes[i].hex
    }
  } return test
}

function replaceColor() {
    for (var i = 0; i < test.boxes.length; i++) {
      if (test.boxes[i].locked === false) {
        test.boxes[i].hex = `#${generateHexCode()}`;
        colorBoxes[i].style.backgroundColor = test.boxes[i].hex
      }
    }
}

function generateHexCode() {
  var hex = '';
  var randomHexElements = [];
  randomHexElements.push(getRandomElement(hexData));
  randomHexElements.push(getRandomElement(hexData));
  randomHexElements.push(getRandomElement(hexData));
  randomHexElements.push(getRandomElement(hexData));
  randomHexElements.push(getRandomElement(hexData));
  randomHexElements.push(getRandomElement(hexData));
  hex = randomHexElements.join('');
  return hex
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
