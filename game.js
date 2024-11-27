import Character from "./character.js";
import Platform from "./platform.js";

let character;
let platforms = [];

function setup() {
  createCanvas(900, 700);
  frameRate(60);

  character = new Character(110, 250, 65, 65);

  platforms.push(new Platform(10, 520, 160, 25));
  platforms.push(new Platform(190, 410, 120, 25));
  platforms.push(new Platform(390, 340, 120, 25));
  platforms.push(new Platform(590, 300, 120, 25));
  platforms.push(new Platform(770, 240, 120, 25));
}

window.setup = setup;

function draw() {
  background(255, 140, 0);
  character.draw();
  character.update(platforms);

  for (let platform of platforms) {
    platform.draw();
  }
}

window.draw = draw;