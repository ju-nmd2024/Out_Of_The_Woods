//side to side monster
export default class Monster {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 50;
    this.xSpeed = 1;

    //minimum x position
    this.minX = x - 90;
    //max x postion
    this.maxX = x + 90;
  }

  //drawing
  draw() {
    fill(0, 240, 48);
    stroke(0);
    rect(this.x, this.y, this.width, this.height);
    fill(255, 0, 0);
    stroke(2);
    ellipse(this.x + 22, this.y + 12, 15);
    stroke(0);
    strokeWeight(5);
    line(this.x + 10, this.y + 10, this.x + 30, this.y + 4);
    stroke(0);
    fill(255, 71, 71);
    ellipse(this.x, this.y + 30, 20, 40);
  }

  //movement
  move() {
    this.x += this.xSpeed;

    if (this.x <= this.minX || this.x >= this.maxX) {
      this.xSpeed *= -1;
    }
  }
}

//up and down monster
class FlyingMonster extends Monster {
  constructor(x, y) {
    super(x, y);
    this.ySpeed = -2;
  }

  //drawing
  draw() {
    //base
    fill(255, 0, 0);
    stroke(0);
    //eyes
    ellipse(this.x, this.y, this.width);
    fill(0);
    ellipse(this.x - 20, this.y, this.width - 70);
    ellipse(this.x + 20, this.y, this.width - 70);
    //eyebrows
    line(this.x - 20, this.y - 10, this.x - 10, this.y);
    //mouth
  }

  //movement
  move() {
    this.y += this.ySpeed;

    if (this.x <= this.minX || this.x >= this.maxX) {
      this.xSpeed *= -1;
    }
  }
}
