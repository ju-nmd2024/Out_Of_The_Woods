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
    fill(75, 0, 130);
    rect(this.x, this.y, this.sizeX, this.sizeY);
    fill(255);
    ellipse(this.x + 25, this.y + 15, this.sizeX - 85);
    stroke(255);
    strokeWeight(3);
    line(this.x + 10, this.y + 15, this.x + 25, this.y + 2);
    pop();
  }
}
