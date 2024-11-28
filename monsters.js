export default class Monster {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.movementSpeed = -2;
  }

  draw() {
    push();
    fill(38, 14, 63);
    stroke(38, 14, 63);
    rect(this.x, this.y, this.sizeX, this.sizeY);
    fill(255);
    ellipse(this.x + 22, this.y + 12, this.sizeX / 6);
    stroke(255);
    strokeWeight(2);
    line(this.x + 10, this.y + 10, this.x + 25, this.y + 2);
    pop();
  }
}
