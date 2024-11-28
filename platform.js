export default class Platform {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  draw() {
    fill(150);
    rect(this.x, this.y, this.sizeX, this.sizeY);
  }
}
