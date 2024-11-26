import Character from "./character.js";
import Platform from "./platform.js";

let character;
let platform;

function setup() {
  createCanvas(900, 700);
  frameRate(60);

  //Draws character
  character = new Character(240, 650, 65, 60);

  //Draws platforms
  platform = new Platform(180, 520, 120, 20);
}

window.setup = setup;

function draw() {
  background(255, 140, 0);
  character.draw();
  character.update();
  platform.draw();
}

window.draw = draw;
