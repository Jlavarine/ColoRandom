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
  displayNewColors() {
    for (var i = 0; i < this.boxes.length; i++) {
      if (!this.boxes[i].locked) {
        this.boxes[i].hex = `#${generateHexCode()}`;
        colorBoxes[i].style.backgroundColor = this.boxes[i].hex;
        hexCodes[i].innerText = this.boxes[i].hex;
      }
    }
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
var savePaletteButton = document.querySelector('.save-palette');
var savedPalettesSection = document.querySelector('.display-saved-palettes');
var miniPalette = document.querySelectorAll('.mini');
var currentPalette;

var hexData = ['A','B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var savedPalettes = []; // will hold objects

//event listeners 👇
window.addEventListener('load', loadPageColors);
newPaletteButton.addEventListener('click', function(){
  currentPalette.displayNewColors()
})
savePaletteButton.addEventListener('click', savePalette)

// functions and event handlers 👇
function loadPageColors() {
  currentPalette = new Palette();
  for (var i = 0; i < currentPalette.boxes.length; i++) {
    colorBoxes[i].style.backgroundColor = currentPalette.boxes[i].hex;
    hexCodes[i].innerText = currentPalette.boxes[i].hex;
 };
};

function savePalette() {
  savedPalettes.push(currentPalette)
  loadPageColors();
  console.log(savedPalettes)
  renderSavedPalette();
  // dispplaySavedPalette function invoked here
  // have saved pallets .locked all changed to one value
};

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

function renderSavedPalette() {
  // show(miniPalette)
  // savedPalettesSection.innerHTML = ''
  for(var i = 0; i < savedPalettes.length; i++) {
    miniPalette[i].style.backgroundColor = savedPalettes[i].boxes[0].hex;
    miniPalette[i].style.backgroundColor = savedPalettes[i].boxes[1].hex;
    miniPalette[i].style.backgroundColor = savedPalettes[i].boxes[2].hex;
    miniPalette[i].style.backgroundColor = savedPalettes[i].boxes[3].hex;
    miniPalette[i].style.backgroundColor = savedPalettes[i].boxes[4].hex;
    // colorBoxes[i].style.backgroundColor = savedPalettes[i].boxes[i].hex;
  }
}

// we want the render to look at our savedPalettes array and then for the length of the array
// we want that many mini palettes displayed. with correct colors



// function displaySavedPalette() {
//   // savedPalettes (array) --to render in the display-saved-palettes section of the html
//   //
// };
//   // push by targetting ID
// // display small version of color boxes in side section and add trash can
//   // mini palette class (similar to saveRomCom)

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
