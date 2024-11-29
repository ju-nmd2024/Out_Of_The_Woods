//side to side monster
class Monster {
  constructor(x, y) {
    this.x = 200;
    this.y = 200;
    this.width = 80;
    this.height = 40;
    this.xSpeed = -3;
  }

  move() {
    this.x += this.xSpeed;

    if (this.x > 300 || this.x < 20) {
      this.xSpeed *= -1;
    }
  }

  display() {
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
  Monster1 = new Monster();
}

function draw() {
  background(220);

  Monster1.move();
  Monster1.display();
}
