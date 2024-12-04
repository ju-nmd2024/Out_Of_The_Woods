//Side to side monster
class Monster {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 50;
    this.xSpeed = 1.5;
    this.minX = x - 90;
    this.maxX = x + 90;
    this.minY = y - 90;
    this.maxY = y + 90;
  }

  //Drawing
  draw() {
    push();
    strokeWeight(5);
    fill(0, 240, 48);
    stroke(0);
    rect(this.x, this.y, this.width, this.height);
    fill(255, 0, 0);
    ellipse(this.x + 22, this.y + 12, this.height - 35);
    line(this.x + 10, this.y + 10, this.x + 30, this.y + 4);
    fill(255, 71, 71);
    ellipse(this.x, this.y + 30, this.width - 60, this.height - 10);
    pop();
  }

  //Movement
  move() {

    if (this.x <= this.minX || this.x >= this.maxX) {
      this.xSpeed *= -1;
    }
    this.x += this.xSpeed;
  }
}

//Up and down monster
class FlyingMonster extends Monster {
  constructor(x, y) {
    super(x, y);
    this.ySpeed = -1.5;
  }

  //Drawing
  draw() {
    //Base
    push();
    strokeWeight(5);
    fill(107, 86, 113);
    stroke(1);
    //Eye
    ellipse(this.x, this.y, this.width);
    fill(255);
    ellipse(this.x, this.y, this.width - 30);
    fill(0);
    ellipse(this.x, this.y, this.width - 78, this.height - 40);
    pop();
  }

  //Movement
  move() {


    if (this.y <= this.minY || this.y >= this.maxY) {
      this.ySpeed *= -1;
    }
    this.y += this.ySpeed;
  }
}

export { Monster, FlyingMonster };
