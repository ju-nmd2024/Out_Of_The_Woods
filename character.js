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
  }

  draw() {
    fill(225);
    ellipse(this.x - 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x - 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x, this.y, this.sizeX, this.sizeY);
  }

  update(platforms) {
    //Movement keys
    if (keyIsDown(65) || keyIsDown(37)) {
      this.x -= this.movementSpeed;
      this.camera += this.movementSpeed;
    } else if (keyIsDown(68) || keyIsDown(39)) {
      this.x += this.movementSpeed;
      this.camera -= this.movementSpeed;
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
