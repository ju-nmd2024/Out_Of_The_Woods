export default class Character {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.movementSpeed = 6;
    this.gravity = 0.4;
    this.velocity = 0;
    this.onGround = false;
    this.jumpHeight = -12;
    this.camera = 0;
    this.bgScroll = 0;
  }

  draw() {
    push();
    fill(255);
    strokeWeight(2);
    //Body
    ellipse(this.x, this.y - 5, this.sizeX, this.sizeY);
    //Feet
    ellipse(this.x, this.y + 28, this.sizeX - 35, this.sizeY - 50);
    //Arms
    ellipse(this.x, this.y - 1, this.sizeX - 78, this.sizeY - 38);
    //Eyes
    if (keyIsDown(65) || keyIsDown(37)) {
      ellipse(this.x - 20, this.y - 10, this.sizeX - 80, this.sizeY - 80);
      fill(0);
      ellipse(this.x - 22, this.y - 10, this.sizeX - 72, this.sizeY - 72);
    } else {
      ellipse(this.x + 20, this.y - 10, this.sizeX - 80, this.sizeY - 80);
      fill(0);
      ellipse(this.x + 22, this.y - 10, this.sizeX - 72, this.sizeY - 72);
    }
    pop();
  }

  update(platforms) {
    //Movement keys
    if (keyIsDown(65) || keyIsDown(37)) {
      this.x -= this.movementSpeed;
      this.camera += this.movementSpeed;
      this.bgScroll += 3;
    } else if (keyIsDown(68) || keyIsDown(39)) {
      this.x += this.movementSpeed;
      this.camera -= this.movementSpeed;
      this.bgScroll -= 3;
    }

    //Jumping
    if (keyIsDown(32) && this.onGround) {
      this.velocity = this.jumpHeight;
      this.onGround = false;
    }

    //Gravity
    this.y += this.velocity;

    //Apply gravity when not grounded
    if (!this.onGround) {
      this.velocity += this.gravity;
    }

    //Collisions with platforms
    this.onGround = false;
    for (let platform of platforms) {
      if (
        this.y + this.sizeY / 2 <= platform.y &&
        this.y + this.sizeY / 2 + this.velocity >= platform.y &&
        this.x + this.sizeX / 2 - 20 > platform.x &&
        this.x - this.sizeX / 2 + 20 < platform.x + platform.sizeX
      ) {
        this.y = platform.y - this.sizeY / 2;
        this.velocity = 0;
        this.onGround = true;
      }
    }
  }
}
