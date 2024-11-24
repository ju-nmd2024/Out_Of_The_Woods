import Character from "./character.js";

const character = new Character(100, 550, 65, 60);

function setup() {
  createCanvas(900, 700);
}

window.setup = setup;

function draw() {
  background(255, 140, 0);
  character.draw();
  character.update();
}

window.draw = draw;
