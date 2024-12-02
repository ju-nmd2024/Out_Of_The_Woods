import Character from "./character.js";
import Platform from "./platforms.js";
import Monster from "./monsters.js";

let state = "start";
let startScreenBg;
let gameScreenBg1;
let gameScreenBg2;
let gameScreenBg3;
let hearts = 3;

let character;
let platforms = [];
let monsters = [];

function preload() {
  startScreenBg = loadImage("assets/startScreenBg.png");
  gameScreenBg1 = loadImage("assets/gameScreenBg.png");
  gameScreenBg2 = loadImage("assets/gameScreenBg.png");
  gameScreenBg3 = loadImage("assets/gameScreenBg.png");
}

window.preload = preload;

function setup() {
  createCanvas(1000, 700);
  frameRate(60);
  textAlign(CENTER);

  //Platforms

  //starting platform
  platforms.push(new Platform(100, 800, 100, 25));
  //2nd
  platforms.push(new Platform(300, 700, 150, 25));
  //3rd with monster on it
  platforms.push(new Platform(600, 600, 300, 25));
  monsters.push(new Monster(710, 559, 70, 40));
  //4th
  platforms.push(new Platform(300, 500, 150, 25));
  //5th
  platforms.push(new Platform(600, 400, 150, 25));
  //6th
  platforms.push(new Platform(980, 400, 150, 25));
  //7th with flying monster
  platforms.push(new Platform(1300, 400, 150, 25));
  monsters.push(new FlyingMonster(1380, 300, 70, 40));
  //8th
  platforms.push(new Platform(1500, 400, 150, 25));

  
  //Character
  character = new Character(150, 767, 65, 65);
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
    textSize(60);
    fill(255);
    stroke(0);
    strokeWeight(2);
    text("GAME TITLE", width / 2, height / 2 - 60);
    pop();

    //Start button
    if (
      mouseX >= 430 &&
      mouseX <= 570 &&
      mouseY >= 325 &&
      mouseY <= 370 &&
      mouseIsPressed
    ) {
      state = "game";
    }

    if (mouseX >= 430 && mouseX <= 570 && mouseY >= 325 && mouseY <= 370) {
      buttonHover();
      textSize(30);
      text("START", width / 2, height / 2 + 12);
    } else {
      button();
      fill(0);
      textSize(30);
      text("START", width / 2, height / 2 + 12);
    }
  }

  function gameScreen() {
    clear();
    //Background Images
    image(gameScreenBg1, character.bgScroll - 1000, 0);
    image(gameScreenBg2, character.bgScroll, 0);
    image(gameScreenBg3, character.bgScroll + 1000, 0);

    //Makes the background scroll
    if (character.bgScroll <= -width) {
      character.bgScroll = 0;
    } else if (character.bgScroll >= width) {
      character.bgScroll = 0;
    }

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
    character.update(platforms);

    for (let platform of platforms) {
      platform.draw();
    }

    character.draw();

    for (let monster of monsters) {
      monster.draw();
      monster.move();
      //Monster Collision
      if (
        character.x < monster.x + monster.width &&
        character.x + character.sizeX > monster.x &&
        character.y < monster.y + monster.height &&
        character.y + character.sizeY > monster.y
      ) {
        character.camera = 0;
        hearts--;
        resetCharacter();
      }
    }

    //If the player falls, they lose a life
    if (character.y >= 920) {
      hearts--;
      character.camera = 0;
      character.bgScroll = 0;
      resetCharacter();
    }

    //If the player has no lives left they get sent the the result screen
    if (hearts === 0) {
      state = "result";
    }

    function resetCharacter() {
      character.x = 150;
      character.y = 700;
      character.velocity = 0;
    }
  }

  function resultScreen() {
    background(100);
    textSize(60);
    text("RESULT", width / 2, height / 2 - 120);

    //Restart button
    if (
      mouseX >= 430 &&
      mouseX <= 570 &&
      mouseY >= 325 &&
      mouseY <= 370 &&
      mouseIsPressed
    ) {
      state = "game";
      hearts = 3;
    }

    if (mouseX >= 430 && mouseX <= 570 && mouseY >= 325 && mouseY <= 370) {
      buttonHover();
      textSize(25);
      text("RESTART", width / 2, height / 2 + 9);
    } else {
      button();
      push();
      fill(0);
      textSize(25);
      text("RESTART", width / 2, height / 2 + 9);
      pop();
    }
  }
}

window.draw = draw;

//Button stylings
function button() {
  push();
  rectMode(CENTER);
  fill(255);
  rect(width / 2, height / 2, 140, 40, 10);
  pop();
}

//Button stylings when you hover over it
function buttonHover() {
  push();
  rectMode(CENTER);
  fill(200);
  rect(width / 2, height / 2, 140, 40, 10);
  pop();
}
