import Character from "./character.js";
import Platform from "./platforms.js";
//import Monster from "./monsters.js";

let state = "start";
let startScreenBg;
let hearts = 3;

let character;
let platforms = [];
//let monsters = [];

function preload() {
  startScreenBg = loadImage("assets/startScreenBg.png");
}

window.preload = preload;

function setup() {
  createCanvas(1000, 700);
  frameRate(60);
  textAlign(CENTER);

  //Character
  character = new Character(450, 767, 65, 65);

  //Platforms
  platforms.push(new Platform(400, 800, 100, 25));
  platforms.push(new Platform(700, 800, 100, 25));
  platforms.push(new Platform(900, 800, 100, 25));
  platforms.push(new Platform(1200, 800, 200, 25));

  //Monsters
  // monsters.push(new Monster(710, 759, 70, 40));
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
    push();
    image(startScreenBg, 0, -100);
    textSize(120);
    fill(255);
    stroke(0);
    strokeWeight(2);
    text("GAME TITLE", width / 2, height / 2 - 120);
    pop();

    //Start Button
    button();
  }

  function gameScreen() {
    clear();

    //Hearts HUD
    push();
    textSize(30);
    fill(0);
    if (hearts === 3) {
      text("❤️❤️❤️", width - 60, 30);
    } else if (hearts === 2) {
      text("❤️❤️", width - 40, 30);
    } else if (hearts === 1) {
      text("❤️", width - 20, 30);
    }
    pop();

    scale(0.8);
    translate(character.camera, 0);
    character.draw();
    character.update(platforms);

    for (let platform of platforms) {
      platform.draw();
    }

    //for (let monster of monsters) {
    //monster.draw();
    //}

    if (character.y >= 920) {
      hearts--;
      character.camera = 0;
      resetCharacter();
    }

    if (hearts === 0) {
      state = "result";
    }

    function resetCharacter() {
      character.x = 450;
      character.y = 767;
      character.velocity = 0;
    }
  }

  function resultScreen() {
    background(100);
    textSize(60);
    text("RESULT", width / 2, height / 2);
  }

  function button() {
    push();
    rectMode(CENTER);
    rect(width / 2, height / 2, 150, 40, 12);
    textSize(30);
    fill(0);
    pop();
  }
}

window.draw = draw;
