 class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}

class MovingPlatform extends Platform {
  constructor(x, y, w, h, speed, direction) {
    super(x,y, w, h);
    this.speed = speed;
    this.startPoint = y; 
    this.direction = direction; 
  }

  move() {
    if (this.y > this.startPoint + 200 || this.y < this.startPoint - 200) {
      this.speed *= -1;
    }
    this.y += this.speed; 
  }
  
}

export { Platform, MovingPlatform };