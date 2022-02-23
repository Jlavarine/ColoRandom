//This Palette will be used until a user decides to save that Palette.
//the paletter generated on page load, is

// on page load --> a new instance of Palette will be declared and diplayed
//that palette's id and 'temporary' colors should be accessible through console.log

//Once the user clicks 'Save Palette' that instance of the palette should be saved and added into the saved palette section/view AND then a new instance of Palette is created and displayed

//saving doesn't depend on locked /unlocked colors

//locking function is about keeping one or more color values the same and changing the others

//when the new palette button is clicked
// the random hex code generator will return a hex code
// we will push that  into the palette.colors array
// repeat for all unlocked color boxes
// save palette - is when the id created??




//global variables 👇
var newPaletteButton = document.querySelector('.new-palette');
var colorBox1 = document.querySelector('.color-1');
var colorBox2 = document.querySelector('.color-2');
var colorBox3 = document.querySelector('.color-3');
var colorBox4 = document.querySelector('.color-4');
var colorBox5 = document.querySelector('.color-5');


var hexData = ['A','B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var savedPalettes = []; // will hold objects



class Color {
  constructor() {
  this.hex = generateHexCode();  //need random hex code, likely a parameter ;
  this.locked = false;

}
}
var colorExample = new Color();
console.log(colorExample);

var colorObject1 = new Color();
var colorObject2 = new Color();
var colorObject3 = new Color();
var colorObject4 = new Color();
var colorObject5 = new Color();


class Palette {
  constructor({colorObject1}, {colorObject2}, {colorObject3}, {colorObject4}, {colorObject5}) {
    this.box1 = colorObject1;
    this.box2 = colorObject2;
    this.box3 = colorObject3;
    this.box4 = colorObject4;
    this.box5 = colorObject5;
    // this.colors = []; //will need to push or unshift into this
    //the divs on the html boxes would display the elements of the this.colors array
    this.id = Date.now();
  }


    //FOR NEXT TIME: 🔥

  replaceColor(){
    //can used to with the "New Palette"  button to replace box1/box2/etc if not locked (!box1.locked)
    //if (!color.locked)
    //then change color.locked to true
  }
  lockColor() {

    //we can access the hex code of a box color by dot notation box1.hex -> 'string'
        //when replacing Colors with new Colors does it need to replace the WHOLE object or just the hex?
        //and does that need to be in this function
        //replace colors
    //we can access the locked status of a box color by dot notation box1.locked -> boolean

    //user should be able to click lock icon to 'save' the color displayed at that index number
    //palette.lockColor() in our event listener?

  }
}

//event listeners 👇
// newPaletteButton.addEventListener('click', -------)

window.addEventListener('load', instantiatePalette);

function instantiatePalette(){
  var currentPalette = new Palette ({colorObject1}, {colorObject2}, {colorObject3}, {colorObject4}, {colorObject5});
  console.log(currentPalette);
}


// functions and event handlers 👇
function generateNewBoxColors() {


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
