export default class Coin {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.width = 30;   
      this.height = 30;
    }
    draw() {
        //coin
        push();
        fill(255, 234, 0);  
        ellipse(this.x, this.y, this.width, this.height);
        pop();
      }

      //if statement to check if the coin is collected or not
      collect(character) {
        if (
          character.x < this.x + this.width &&
          character.x + character.w > this.x &&
          character.y < this.y + this.height &&
          character.y + character.h > this.y
        ) {
          return true;
        }
        return false; 
      }
    }
