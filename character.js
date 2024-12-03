export default class Character {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
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
    ellipse(this.x, this.y - 5, this.w, this.h);
    //Feet
    ellipse(this.x, this.y + 28, this.w - 35, this.h - 50);
    //Arms
    ellipse(this.x, this.y - 1, this.w - 78, this.h - 38);
    //Eyes
    if (keyCode === 65 || keyCode === 37) {
      ellipse(this.x - 20, this.y - 10, this.w - 80, this.h - 80);
      fill(0);
      ellipse(this.x - 22, this.y - 10, this.w - 72, this.h - 72);
    } else {
      ellipse(this.x + 20, this.y - 10, this.w - 80, this.h - 80);
      fill(0);
      ellipse(this.x + 22, this.y - 10, this.w - 72, this.h - 72);
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

    //Apply gravity when not on the ground
    if (!this.onGround) {
      this.velocity += this.gravity;
    }

    //Collisions with platforms
    this.onGround = false;
    for (let platform of platforms) {
      if (
        this.y + this.h / 2 <= platform.y &&
        this.y + this.h / 2 + this.velocity >= platform.y &&
        this.x + this.w / 2 - 20 > platform.x &&
        this.x - this.w / 2 + 20 < platform.x + platform.w
      ) {
        this.y = platform.y - this.h / 2;
        this.velocity = 0;
        this.onGround = true;
      }
    }
  }
}
