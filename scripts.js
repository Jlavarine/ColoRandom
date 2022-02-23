var hexData = ['A','B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




class Color {
  constructor(){
  this.hex = ;  //need random hex code, likely a parameter ;
  this.locked = false;
}
}

class Palette {
  constructor() {
    // another thought process: this.color1 = ; this.color2 = ;
    this.colors = []; //will need to push or unshift into this
    //the divs on the html boxes would display the elements of the this.colors array
    this.id = Date.now();
  }
  lockColor() {
    //user should be able to click lock icon to 'save' the color displayed at that index number
    //palette.lockColor() in our event listener?

    //if (!color.locked)
    //then change color.locked to true
  }
}
// Note: on page load, a new instance of Palette will be declared. This Palette will be used until a user decides to save that Palette. Then, a new instance will be created and used until that palette is saved. Continue ad infinitum.
// It should have 5 Colors
// It should have a unique ID
// It should be able to replace the Colors with new Colors
// It should be able to lock Colors
// It should only replace unlocked Colors

function generateNewPalette() {
  //when the new palette button is clicked
  // the random hex code generator will return a hex code
  // we will push that  into the palette.colors array
  // repeat for all unlocked color boxes
  // save palette - is when the id created??
}
function generateHexCode() {
  var hex = '';
  var randomHexElements = []; // a place to store all random characters until we have 6 elements

  getRandomElement();  // gives us one random character from hexData array
  //we need to store the corresponding element into a string

  getRandomElement();
  getRandomElement();
  getRandomElement();
  getRandomElement();
  //combine into a string

  //a direction....
  hex = concat.randomHexElements[i]
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
