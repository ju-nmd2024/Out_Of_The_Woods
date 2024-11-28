import Character from "./character.js";
import Platform from "./platforms.js";
import Monster from "./monsters.js";

let state = "game";
let character;
let platforms = [];
let monsters = [];

function setup() {
  createCanvas(900, 700);
  frameRate(60);

  //Character
  character = new Character(450, 767, 65, 65);

  //Platforms
  platforms.push(new Platform(400, 800, 700, 25));

  //Monsters
  monsters.push(new Monster(760, 759, 80, 40));
}

window.setup = setup;

function draw() {
  //Game state logic
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }

  function startScreen() {
    background(0, 255, 0);
    textAlign(CENTER);
    textSize(60);
    text("GAME TITLE", width / 2, height / 2);
  }

  function gameScreen() {
    background(100);
    scale(0.8);
    translate(character.camera, 0);
    character.draw();
    character.update(platforms);

    for (let platform of platforms) {
      platform.draw();
    }

    for (let monster of monsters) {
      monster.draw();
    }
  }

  function resultScreen() {
    background(200, 200, 200);
    textAlign(CENTER);
    textSize(60);
    text("RESULT", width / 2, height / 2);
  }
}

window.draw = draw;
