export default class Character {
  constructor(x, y, sizeX, sizeY) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.speedX = 6;
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

  update() {
    //Movement Keys
    if (keyIsDown(65) || keyIsDown(37)) {
      this.x -= this.speedX;
    } else if (keyIsDown(68) || keyIsDown(39)) {
      this.x += this.speedX;
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

    //Ground
    if (this.y >= 610) {
      this.y = 610;
      this.velocity = 0;
      this.isGrounded = true;
    }
  }
}
