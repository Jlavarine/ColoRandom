//classes 👇
class Color {
  constructor() {
  this.hex = `#${generateHexCode()}`;
  this.locked = false;
};
};

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
var colorBoxes = document.querySelectorAll('.color-format');
var hexCodes = document.querySelectorAll('.hex-code');
var savePaletteButton = document.querySelector('.save-palette');
var savedPalettesSection = document.querySelector('.display-saved-palettes');
var miniPaletteSection = document.querySelector('.mini-palette');
var mini = document.querySelectorAll('.mini');

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
  show(miniPaletteSection)
  savedPalettesSection.innerHTML = ''
  for(var i = 0; i < savedPalettes.length; i++) {
  savedPalettesSection.innerHTML += `<section class="mini-palette">
    <div class="color-1-m mini" style="background-color:${savedPalettes[i].boxes[0].hex};">
    </div>
    <div class="color-2-m mini" style="background-color:${savedPalettes[i].boxes[1].hex};">
    </div>
    <div class="color-3-m mini" style="background-color:${savedPalettes[i].boxes[2].hex};">
    </div>
    <div class="color-4-m mini" style="background-color:${savedPalettes[i].boxes[3].hex};">
    </div>
    <div class="color-5-m mini" style="background-color:${savedPalettes[i].boxes[4].hex};">
    </div>
    <img src="assets/trashcan-small.png" alt="Small Trashcan Icon">
  </section>`
    // mini[0].style.backgroundColor = savedPalettes[i].boxes[0].hex;
    // mini[1].style.backgroundColor = savedPalettes[i].boxes[1].hex;
    // mini[2].style.backgroundColor = savedPalettes[i].boxes[2].hex;
    // mini[3].style.backgroundColor = savedPalettes[i].boxes[3].hex;
    // mini[4].style.backgroundColor = savedPalettes[i].boxes[4].hex;
  };
};

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
};

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
};
