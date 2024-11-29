//side to side monster
class FloorMonster {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 50;
    this.xSpeed = -2;
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

  //if statement for movement
  move() {
    this.x += this.xSpeed;

    if (this.x > 300 || this.x < 20) {
      this.xSpeed *= -1;
    }
  }
}

//up and down monster
class FlyingMonster extends FloorMonster {
  constructor(x, y) {
    super(x, y);
    this.ySpeed = -2;
  }

  //drawing
  draw() {
    fill(255, 0, 0);
    stroke(0);
    ellipse(this.x, this.y, this.width);
  }

  //if statement for movement
  move() {
    this.y += this.ySpeed;

    if (this.y > 400 || this.y < 200) {
      this.ySpeed *= -1;
    }
  }
}

//array
const monsters = [];

function setup() {
  createCanvas(1000, 1000);

  monsters.push(new FloorMonster(200, 200));
  monsters.push(new FlyingMonster(500, 200));
}

function draw() {
  background(255);

  //loop
  for (let i = 0; i < monsters.length; i++) {
    monsters[i].move();
    monsters[i].draw();
  }
}
