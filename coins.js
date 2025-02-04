class Coin {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.type = type; 
      this.width = 30;   
      this.height = 30;
    }
    draw() {
        push();
        fill(255, 234, 0);  
        ellipse(this.x, this.y, this.width, this.height);
        pop();
      }
}