import Character from "./character.js";
import Platform from "./platform.js";

let character;
let platforms = [];

function setup() {
  createCanvas(900, 700);
  frameRate(60);

  character = new Character(450, 250, 65, 65);

  platforms.push(new Platform(400, 800, 200, 25));
  platforms.push(new Platform(750, 800, 100, 25));
  platforms.push(new Platform(1050, 800, 200, 25));
}

window.setup = setup;

function draw() {
  background(100);
  scale(0.8);
  translate(character.camera, 0);
  character.draw();
  character.update(platforms);

  for (let platform of platforms) {
    platform.draw();
  }
}

window.draw = draw;
