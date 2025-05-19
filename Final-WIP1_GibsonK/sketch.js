let playerHP = 30;
let enemyHP = 25;

let dice = [];
let usedDice = [];
let maxDice = 3;  //controls how much dice player/enemy has

let state = 'playerTurn'; // other states are 'enemyTurn', 'waiting', 'gameOver'
let selectedCard = -1;

function setup() {
  createCanvas(800, 600); 
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  rollDice();
}

function draw() {
  background(50);
  fill(255);

  //display health
  textSize(24);
  text("Player HP: " + playerHP, 150, 30);
  text("Enemy HP: " + enemyHP, width - 150, 30);

  if (state !== 'gameOver') { // while game isnt over
    drawDice();
    Cards();
    EndTurnButton();
  }

  if (state === 'enemyTurn') {  // wait for enemy turn
    setTimeout(enemyTurn, 500);
    state = 'waiting';  
  }

  if ((playerHP <= 0 || enemyHP <= 0) && state !== 'gameOver') {  
    state = 'gameOver'; //if player or enemy reaches 0 hp or under change game state to over
  }

  if (state === 'gameOver') {  //when game is over give the option to retry
    textSize(40);
    fill(255, 0, 0);
    if (playerHP <= 0) {
      text("You Lose!", width / 2, height / 2 - 50);
    } else {
      text("You Win!", width / 2, height / 2 - 50);
    }
    RetryButton();
  }
}

function drawDice() {
  for (let i = 0; i < dice.length; i++) {  //reads for the amount of dice to draw and creates that many
    if (usedDice.includes(i)) {
      fill(100);
    } else {
      fill(255);
    }
    rect(150 + i * 100, 100, 70, 70);
    fill(0);
    textSize(28);
    text(dice[i], 150 + i * 100, 100);
  }
}

function Cards() {  
  for (let i = 0; i < 2; i++) {
    if (i === selectedCard) {  //if card is chosen, highlight it orange
      fill('orange');
    } else {
      fill(200);
    }
    rect(width / 2, 250 + i * 120, 300, 80);
    fill(0);
    textSize(24);
    if (i === 0) {
      text("Strike (≥4)", width / 2, 250 + i * 120);
    } else if (i === 1) {
      text("Heal (even)", width / 2, 250 + i * 120);
    }
  }
}

function EndTurnButton() {
  if (state === 'playerTurn') {
    fill(180);
  } else {
    fill(100);
  }
  rect(width / 2, height - 70, 180, 50);
  fill(0);
  textSize(24);
  text("End Turn", width / 2, height - 70);
}

function RetryButton() {
  fill(255);
  rect(width / 2, height / 2 + 20, 180, 50);
  fill(0);
  textSize(24);
  text("Retry", width / 2, height / 2 + 20);
}

function mousePressed() {
  if (state === 'gameOver') {
    if (mouseX > width / 2 - 90 && mouseX < width / 2 + 90 &&
        mouseY > height / 2 - 5 && mouseY < height / 2 + 45) {
      restartGame();
    }
    return;
  }

  if (state !== 'playerTurn') return;

  // Ends turn
  if (mouseX > width / 2 - 90 && mouseX < width / 2 + 90 &&
      mouseY > height - 95 && mouseY < height - 45) {
    endPlayerTurn();
    return;
  }

  // Card selection
  for (let i = 0; i < 2; i++) {  
    let cy = 250 + i * 120;
    if (mouseX > width / 2 - 150 && mouseX < width / 2 + 150 &&
        mouseY > cy - 40 && mouseY < cy + 40) {
      selectedCard = i;
      return;
    }
  }

  // Dice use
  if (selectedCard !== -1) {
    for (let i = 0; i < dice.length; i++) {
      let dx = 150 + i * 100;
      if (!usedDice.includes(i) &&
          mouseX > dx - 35 && mouseX < dx + 35 &&
          mouseY > 65 && mouseY < 135) {
        let value = dice[i];
        if (selectedCard === 0 && value >= 4) {
          enemyHP -= value;
          usedDice.push(i);
          selectedCard = -1;
        } else if (selectedCard === 1 && value % 2 === 0) {
          playerHP = min(30, playerHP + value);
          usedDice.push(i);
          selectedCard = -1;
        }
        return; 
      }
    }
  }
}

function rollDice() {  //function to roll dice
  dice = [];
  usedDice = [];
  for (let i = 0; i < maxDice; i++) {
    dice.push(floor(random(1, 7)));  //random 0,6 return 0 value dice
  }
}

function endPlayerTurn() {  //when player ends turn enemy turn starts
  selectedCard = -1;  
  state = 'enemyTurn';
}

function enemyTurn() {  //enemy rolls dice x times and subtracts player hp by roll values
  for (let i = 0; i < maxDice; i++) {
    let val = floor(random(1, 7)); 
    playerHP -= val;
  }
  rollDice();
  state = 'playerTurn';
}

function restartGame() {  //sets game state back to how it was
  playerHP = 30;
  enemyHP = 25;
  selectedCard = -1;
  state = 'playerTurn';
  rollDice();
}