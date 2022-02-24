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
var hexCodes = document.querySelectorAll('.hex-code');
var currentPalette;

var hexData = ['A','B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var savedPalettes = []; // will hold objects

//event listeners 👇
newPaletteButton.addEventListener('click', displayNewColors)
window.addEventListener('load', loadPageColors);

// functions and event handlers 👇
function loadPageColors() {
  currentPalette = new Palette();
  for (var i = 0; i < currentPalette.boxes.length; i++) {
    colorBoxes[i].style.backgroundColor = currentPalette.boxes[i].hex;
    hexCodes[i].innerText = currentPalette.boxes[i].hex;
 }
}

function displayNewColors() {
  for (var i = 0; i < currentPalette.boxes.length; i++) {
    if (!currentPalette.boxes[i].locked) {
      currentPalette.boxes[i].hex = `#${generateHexCode()}`;
      colorBoxes[i].style.backgroundColor = currentPalette.boxes[i].hex;
      hexCodes[i].innerText = currentPalette.boxes[i].hex;
    }
  }
}

// function savePalette
// document query selector for save palette button
// store currentPalette in savedPalette array using .push
  // push by targetting ID
// display small version of color boxes in side section and add trash can
  // mini palette class (similar to saveRomCom)
// instantiate a new palette to be displayed as current/in-progress palette
// savePalette & changeDisplay -- attached to eventListener


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
  return hex;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
