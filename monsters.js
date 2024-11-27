//side to side monster
class Monster {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xSpeed = -3;
  }

  draw() {
    fill(38, 14, 63);
    stroke(38, 14, 63);
    rect(this.x, this.y, this.width, this.height);
    fill(255);
    ellipse(this.x + 22, this.y + 12, 15);
    stroke(255);
    strokeWeight(6);
    line(this.x + 10, this.y + 10, this.x + 25, this.y + 2);
  }
}

let Monster1;

function setup() {
  createCanvas(1000, 1000);
  Monster1 = new Monster(200, 200, 80, 40);
}

function draw() {
  background(220);
  Monster1.draw();
}
