export default class Character {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.movementSpeed = 6;
    this.gravity = 0.6;
    this.velocity = 0.4;
    this.isGrounded = false;
    this.jumpHeight = -14;
  }

  draw() {
    fill(255);
    ellipse(this.x - 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 15, this.y + 25, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x - 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x + 25, this.y - 5, this.sizeX - 90, this.sizeY - 80);
    ellipse(this.x, this.y, this.sizeX, this.sizeY);
  }

  update(platforms) {
    //Movement Keys
    if (keyIsDown(65) || keyIsDown(37)) {
      this.x -= this.movementSpeed;
    } else if (keyIsDown(68) || keyIsDown(39)) {
      this.x += this.movementSpeed;
    }

    //Jumping
    if (keyIsDown(32) && this.isGrounded) {
      this.velocity = this.jumpHeight;
      this.isGrounded = false;
    }

    //Gravity
    //Continuous
    this.y += this.velocity;

    //Apply gravity When not grounded
    if (!this.isGrounded) {
      this.velocity += this.gravity;
    }

    //Collisions with platforms
    this.isGrounded = false;
    for (let platform of platforms) {
      if (
        this.y + this.sizeY / 2 <= platform.y &&
        this.y + this.sizeY / 2 + this.velocity >= platform.y &&
        this.x + this.sizeX / 2 - 20 > platform.x &&
        this.x - this.sizeX / 2 + 20 < platform.x + platform.sizeX
      ) {
        this.y = platform.y - this.sizeY / 2;
        this.velocity = 0;
        this.isGrounded = true;
      }
    }
  }
}
