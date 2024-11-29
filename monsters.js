//side to side monster
class Monster {
  constructor(x, y) {
    this.x = 200;
    this.y = 200;
    this.width = 80;
    this.height = 50;
    this.xSpeed = -0;
  }
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
  move() {
    this.x += this.xSpeed;

    if (this.x > 300 || this.x < 20) {
      this.xSpeed *= -1;
    }
  }
}

let Monster1;

function setup() {
  createCanvas(1000, 1000);
  Monster1 = new Monster();
}

function draw() {
  background(220);

  Monster1.move();
  Monster1.draw();
}
