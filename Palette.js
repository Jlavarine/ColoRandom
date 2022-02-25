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
      };
    };
    displayColors()
  };
};
