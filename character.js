export default class Character {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  draw() {
    fill(255);
    ellipse(this.x - 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x - 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x, this.y, this.sizeX, this.sizeY);
  }
}
