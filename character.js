export default class Character {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.speedX = 6;
  }

  draw() {
    fill(255);
    ellipse(this.x - 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x - 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x, this.y, this.sizeX, this.sizeY);
  }

  update() {
    //Movement Keys
    if (keyIsDown(65) || keyIsDown(37)) {
      this.x -= this.speedX;
    } else if (keyIsDown(68) || keyIsDown(39)) {
      this.x += this.speedX;
    }
  }
}
