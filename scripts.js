//global variables 👇
var newPaletteButton = document.querySelector('.new-palette');
var colorBoxSection = document.querySelector('.color-boxes');
var colorBoxes = document.querySelectorAll('.color-format');
var hexCodes = document.querySelectorAll('.hex-code');
var savePaletteButton = document.querySelector('.save-palette');
var savedPalettesSection = document.querySelector('.display-saved-palettes');
var miniPaletteSection = document.querySelector('.mini-palette');
var mini = document.querySelectorAll('.mini');
var trashcan = document.querySelector('.trashcan');
var currentPalette;
var savedPalettes = [];
//event listeners 👇
window.addEventListener('load', loadPageColors);
newPaletteButton.addEventListener('click', function(){
  currentPalette.displayNewColors()
});
savePaletteButton.addEventListener('click', savePalette);
colorBoxSection.addEventListener('click', function(event) {
  var string = event.target.className;
  var numberString = string.slice(6,7);
  var numberValue = parseInt(numberString);
  currentPalette.lockColor(numberValue - 1);
  toggleHiddenClass(document.querySelector(`.unlocked-${numberValue}`));
  toggleHiddenClass(document.querySelector(`.locked-${numberValue}`));
});
// functions👇
function loadPageColors() {
  currentPalette = new Palette();
  for (var i = 0; i < currentPalette.boxes.length; i++) {
    colorBoxes[i].style.backgroundColor = currentPalette.boxes[i].hex;
    hexCodes[i].innerText = currentPalette.boxes[i].hex;
 };
};

function displayColors() {
  for (var i = 0; i < currentPalette.boxes.length; i++) {
    colorBoxes[i].style.backgroundColor = currentPalette.boxes[i].hex;
    hexCodes[i].innerText = currentPalette.boxes[i].hex;
  };
};

function savePalette() {
  savedPalettes.push(currentPalette);
  loadPageColors();
  renderSavedPalette();
  unlockAllLocks();
};

function deleteSavedPalette(id) {
  for (var i = 0; i < savedPalettes.length; i++) {
    if (id == savedPalettes[i].id) {
      savedPalettes.splice(i, 1);
    };
    renderSavedPalette();
  };
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
  for(i = 1; i < 6; i++) {
    show(document.querySelector(`.unlocked-${i}`));
    hide(document.querySelector(`.locked-${i}`));
  };
};

function renderSavedPalette() {
  show(miniPaletteSection);
  savedPalettesSection.innerHTML = '';
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
    <img class="trashcan" id="${savedPalettes[i].id}" onClick="deleteSavedPalette(this.id)" src="assets/trashcan-small.png" alt="Small Trashcan Icon">
  </section>`;
  };
};

function generateHexCode() {
  var hexData = ['A','B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
