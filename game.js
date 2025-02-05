/*
This is "Out Of The Woods" a platformer game!
Made by Emil Eriksson and Dania Al-Zubeidi
*/

import Character from "./character.js";
import  Platform from "./platforms.js";
import { Monster, FlyingMonster } from "./monsters.js";
import  Coin from "./coins.js";

//Game
let state = "start";
let hearts = 3;
let character;
let platforms = [];
let monsters = [];
let items = [];
let numItems = 50; 
let score= 0;

//Backgrounds
let startScreenBg;
let gameScreenBg1;
let gameScreenBg2;
let gameScreenBg3;

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
  platforms.push(new Platform(120, 800, 150, 25));
  //2nd
  platforms.push(new Platform(300, 650, 150, 25, 2, 1));
  //3rd with walking monster on it
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
  monsters.push(new FlyingMonster(1570, 400, 70, 40));
  //8th
  platforms.push(new Platform(1700, 400, 150, 25));
  //9th with walking monster on it
  platforms.push(new Platform(2000, 400, 350, 25));
  monsters.push(new Monster(2100, 359, 70, 40));
  //10th
  platforms.push(new Platform(2600, 400, 250, 25));
  //11th with flying monster between
  platforms.push(new Platform(3300, 800, 100, 25));
  monsters.push(new FlyingMonster(3600, 760, 70, 40));
  //12th
  platforms.push(new Platform(3700, 800, 100, 25));
  //13th
  platforms.push(new Platform(3800, 700, 100, 25));
  //14th
  platforms.push(new Platform(4100, 700, 100, 25));
  //15th with flying monster and walking
  platforms.push(new Platform(4400, 700, 400, 25));
  monsters.push(new FlyingMonster(4300, 650, 70, 40));
  monsters.push(new Monster(4600, 659, 70, 40));
  //16th
  platforms.push(new Platform(4900, 550, 200, 25));
  //17th
  platforms.push(new Platform(5150, 450, 200, 25));
  //18th
  platforms.push(new Platform(5400, 350, 100, 25));
  //19th
  platforms.push(new Platform(5500, 250, 100, 25));
  //20th
  platforms.push(new Platform(5700, 150, 500, 25));

  //Character
  character = new Character(200, 767, 65, 65);


  //Coins
  for (let i = 0; i < numItems; i++) {
    //X position
    let coinX = random(100, 5000);  
    //Y position
    let coinY = random(100, 300);  
    //Array
    items.push(new Coin(coinX, coinY, 30, 30)); 
  }
  
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
    image(startScreenBg, 0, 0);
    largeText();
    text("OUT OF THE WOODS", width / 2, height / 2 - 60);
    pop();

    //Start button
    if (mouseX >= 430 && mouseX <= 570 && mouseY >= 325 && mouseY <= 370) {
      push();
      startButtonHover();
      fill(0);
      textSize(30);
      text("START", width / 2, height / 2 + 12);
      pop();
    } else {
      startButton();
      fill(0);
      textSize(30);
      text("START", width / 2, height / 2 + 12);
    }

    if (
      mouseX >= 430 &&
      mouseX <= 570 &&
      mouseY >= 325 &&
      mouseY <= 370 &&
      mouseIsPressed
    ) {
      state = "game";
      hearts = 3;
      character.camera = 0;
      resetCharacter();
    }
  }

  function gameScreen() {
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
    fill(255);
    strokeWeight(2);
    rectMode(CENTER);
    rect(75, 19, 140, 40);
    textSize(30);
    if (hearts === 3) {
      text("❤️❤️❤️", width - 925, 28);
    } else if (hearts === 2) {
      text("❤️❤️", width - 925, 30);
    } else if (hearts === 1) {
      text("❤️", width - 925, 30);
    }
    pop();

    //Menu button
    if (mouseX <= 994 && mouseX >= 905 && mouseY <= 35 && mouseY >= 0) {
      menuButtonHover();
      fill(0);
      textSize(20);
      text("MENU", 950, 25);
    } else {
      menuButton();
      fill(0);
      textSize(20);
      text("MENU", 950, 25);
    }

    if (
      mouseX <= 994 &&
      mouseX >= 905 &&
      mouseY <= 35 &&
      mouseY >= 0 &&
      mouseIsPressed
    ) {
      state = "start";
    }

    //Character camera
    scale(0.8);
    translate(character.camera, 0);

    for (let platform of platforms) {
      platform.draw();
    }

    character.draw();
    character.update(platforms);

    //Loop of coins
    for (let i = items.length - 1; i >= 0; i--) {
      let coin = items[i];
      coin.draw(); 
      if (coin.collect(character)) {
        items.splice(i, 1); 
        score += 1; 
      }
    }


    for (let monster of monsters) {
      monster.draw();
      monster.move();
      //Monster Collision
      if (
        character.x < monster.x + monster.width &&
        character.x + character.w / 2 > monster.x &&
        character.y < monster.y + monster.height &&
        character.y + character.h > monster.y
      ) {
        character.camera = 0;
        hearts--;
        resetCharacter();
      }
    }

    //Finish line
    push();
    fill(0, 255, 0);
    strokeWeight(6);
    rect(6100, 54, 80, 100);
    fill(0);
    text("Home", 6137, 85);
    pop();

    //Win condition
    if (character.x >= 6070) {
      state = "result";
    }

    //Lose condition
    if (hearts === 0) {
      state = "result";
    }
  }

  //If the player falls, they lose a life
  if (character.y >= 920) {
    hearts--;
    character.camera = 0;
    character.bgScroll = 0;
    resetCharacter();
  }

  function resultScreen() {
    if (hearts === 0) {
      push();
      background(0);
      largeText();
      fill(255, 0, 0);
      text("YOU DIED", width / 2, height / 2 - 60);
      pop();
    } else if (hearts >= 1 && character.x >= 6070) {
      push();
      background(0);
      largeText();
      fill(0, 255, 0);
      text("YOU SURVIVED", width / 2, height / 2 - 60);
      pop();
    }

    //Restart button
    if (mouseX >= 430 && mouseX <= 570 && mouseY >= 325 && mouseY <= 370) {
      startButtonHover();
      fill(0);
      textSize(25);
      text("RESTART", width / 2, height / 2 + 9);
    } else {
      startButton();
      push();
      fill(0);
      textSize(25);
      text("RESTART", width / 2, height / 2 + 9);
      pop();
    }

    if (
      mouseX >= 430 &&
      mouseX <= 570 &&
      mouseY >= 325 &&
      mouseY <= 370 &&
      mouseIsPressed
    ) {
      state = "game";
      hearts = 3;
      character.camera = 0;
      resetCharacter();
    }

    //Menu button
    push();
    translate(0, 60);
    if (mouseX >= 430 && mouseX <= 570 && mouseY >= 390 && mouseY <= 428) {
      startButtonHover();
      fill(0);
      textSize(25);
      text("MENU", 500, 360);
    } else {
      startButton();
      fill(0);
      textSize(25);
      text("MENU", 500, 360);
    }
    pop();

    if (
      mouseX >= 430 &&
      mouseX <= 570 &&
      mouseY >= 390 &&
      mouseY <= 428 &&
      mouseIsPressed
    ) {
      state = "start";
    }
  }
}

window.draw = draw;

//Resets the character to the beginning
function resetCharacter() {
  character.x = 200;
  character.y = 767;
  character.velocity = 0;
}

//Large text
function largeText() {
  textSize(75);
  stroke(0);
  strokeWeight(8);
  fill(255);
}

//Start and restart button stylings
function startButton() {
  push();
  rectMode(CENTER);
  fill(255);
  rect(width / 2, height / 2, 140, 40, 10);
  pop();
}

//Start and restart button stylings when you hover over them
function startButtonHover() {
  push();
  rectMode(CENTER);
  fill(200);
  rect(width / 2, height / 2, 140, 40, 10);
  pop();
}

//Menu button stylings
function menuButton() {
  push();
  rectMode(CENTER);
  fill(255);
  rect(950, 19, 90, 40);
  pop();
}

//Menu button stylings when you hover over them
function menuButtonHover() {
  push();
  rectMode(CENTER);
  fill(200);
  rect(950, 19, 90, 40);
  pop();
}

/*
Source for loading images:
https://p5js.org/reference/p5/loadImage/

Source for Monster collision:
https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
*/
