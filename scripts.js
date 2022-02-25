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
    if (this.boxes[i].locked) {
      this.boxes[i].locked = false;
    } else if (!this.boxes[i].locked)
    this.boxes[i].locked = true;
  }

  displayNewColors() {
    for (var i = 0; i < this.boxes.length; i++) {
      if (!this.boxes[i].locked) {
        this.boxes[i].hex = `#${generateHexCode()}`;
        colorBoxes[i].style.backgroundColor = this.boxes[i].hex;
        hexCodes[i].innerText = this.boxes[i].hex;
      };
    };
  };
};

//global variables 👇
var newPaletteButton = document.querySelector('.new-palette');
// var colorBox1 = document.querySelector('.box-1');
// var colorBox2 = document.querySelector('.box-2');
// var colorBox3 = document.querySelector('.box-3');
// var colorBox4 = document.querySelector('.box-4');
// var colorBox5 = document.querySelector('.box-5');
var colorBox1 = document.querySelector('.color-1');
var colorBox2 = document.querySelector('.color-2');
var colorBox3 = document.querySelector('.color-3');
var colorBox4 = document.querySelector('.color-4');
var colorBox5 = document.querySelector('.color-5');
var colorBoxSection = document.querySelector('.color-boxes');
var colorBoxes = document.querySelectorAll('.color-format');
var hexCodes = document.querySelectorAll('.hex-code');
var savePaletteButton = document.querySelector('.save-palette');
var savedPalettesSection = document.querySelector('.display-saved-palettes');
var miniPaletteSection = document.querySelector('.mini-palette');
var mini = document.querySelectorAll('.mini');
var unlockedBox1 = document.querySelector('.unlocked-1');
var unlockedBox2 = document.querySelector('.unlocked-2');
var unlockedBox3 = document.querySelector('.unlocked-3');
var unlockedBox4 = document.querySelector('.unlocked-4');
var unlockedBox5 = document.querySelector('.unlocked-5');
var lockedBox1 = document.querySelector('.locked-1');
var lockedBox2 = document.querySelector('.locked-2');
var lockedBox3 = document.querySelector('.locked-3');
var lockedBox4 = document.querySelector('.locked-4');
var lockedBox5 = document.querySelector('.locked-5');


var currentPalette;

var hexData = ['A','B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var savedPalettes = []; // will hold objects

//event listeners 👇
window.addEventListener('load', loadPageColors);
newPaletteButton.addEventListener('click', function(){
  currentPalette.displayNewColors()
})
savePaletteButton.addEventListener('click', savePalette)
colorBoxSection.addEventListener('click', function(event) {
  console.log(event.target)
  if (event.target.className === 'color-1 color-format') {
    currentPalette.lockColor(0);
    toggleHiddenClass(unlockedBox1);
    toggleHiddenClass(lockedBox1);
  } else if(event.target.className === 'color-2 color-format') {
    currentPalette.lockColor(1);
    toggleHiddenClass(unlockedBox2);
    toggleHiddenClass(lockedBox2);
  } else if(event.target.className === 'color-3 color-format') {
    currentPalette.lockColor(2);
    toggleHiddenClass(unlockedBox3);
    toggleHiddenClass(lockedBox3);
  } else if(event.target.className === 'color-4 color-format') {
    currentPalette.lockColor(3);
    toggleHiddenClass(unlockedBox4);
    toggleHiddenClass(lockedBox4);
  } else if(event.target.className === 'color-5 color-format') {
    currentPalette.lockColor(4);
    toggleHiddenClass(unlockedBox5);
    toggleHiddenClass(lockedBox5);
  }
});
// functions👇
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
  unlockAllLocks()
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function toggleHiddenClass(element) {
  element.classList.toggle('hidden');
}

function unlockAllLocks() {
  show(unlockedBox1);
  hide(lockedBox1);
  show(unlockedBox2);
  hide(lockedBox2);
  show(unlockedBox3);
  hide(lockedBox3);
  show(unlockedBox4);
  hide(lockedBox4);
  show(unlockedBox5);
  hide(lockedBox5);
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
