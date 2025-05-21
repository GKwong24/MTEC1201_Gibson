let playerHP = 30;
let enemyHP;

let dice = [];
let usedDice = [];
let maxDice = 3;

let stage = 1;
let totalStages = 5; //5 stages

let state = 'pregame'; // states are: 'pregame', 'playerTurn', 'enemyTurn', 'waiting', 'gameOver'

let selectedDie = -1;
let lastEnemyDamage = 0;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(50);
  fill(255);

  // Display health and stage
  textSize(24);
  text("Player HP: " + playerHP, 150, 30);
  text("Enemy HP: " + enemyHP, width - 150, 30);
  text("Stage: " + stage + " / " + totalStages, width / 2, 30); 

  if (state === 'pregame') {
    drawPregame();
    return;
  }

  if (state !== 'gameOver') {  // at the start/restart of game 
    drawDice();
    drawCards();
    drawEndTurnButton();
  }

  if (state === 'enemyTurn') {
    setTimeout(enemyTurn, 500);  //setTimeout makes delay to simulate enemy thinking
    state = 'waiting'; //needed or else enemy turn is repeated
  }

  if (state === 'playerTurn' && lastEnemyDamage > 0) {  //show enemy's damage
    textSize(20);
    fill(255, 100, 100);
    text("The enemy dealt " + lastEnemyDamage + " damage!", 150, 70);
  }
//changes state to game over if player or enemy reaches 0 hp
  if (playerHP <= 0 && state !== 'gameOver') {
  state = 'gameOver';
  }
  else if (enemyHP <= 0 && state !== 'waiting') {
    if (stage >= totalStages) {
      state = 'gameOver';
    }
    else {
      state = 'waiting';
      setTimeout(nextStage, 1000);
    }
  }

  if (state === 'gameOver') {
    textSize(40);
    fill(255, 0, 0);
    if (playerHP <= 0) {  //if you lose
      text("You Lose!", width / 2, height / 2 - 50);
    }
    else {   //if you win
      text("You Win!", width / 2, height / 2 - 50);
    }
    drawRetryButton();
    drawBackButton();
  }
}

function drawDice() {
  let diceStartX = width - 100;  //variables used for dice position 
  let diceStartY = height - 100;

  for (let i = 0; i < dice.length; i++) {
    let diceX = diceStartX - i * 100;  //for multiple dice

    if (usedDice.includes(i)) {  //checks if dice is used or not
      fill(100);  //grays out the used dice
    }
    else if (i === selectedDie) {
      fill('orange');  //fill orange if selected
    } 
    else {
      fill(255);  //fill neutral if unused and unselected
    }

    rect(diceX, diceStartY, 70, 70);
    fill(0);
    textSize(28);
    text(dice[i], diceX, diceStartY);
  }
}

function drawCards() {
  for (let i = 0; i < 2; i++) {
    fill(200);
    rect(width / 2, 180 + i * 100, 300, 80);
    fill(0);
    textSize(24);
    if (i === 0) {
      text("Strike (≥4)", width / 2, 180 + i * 100);
    }
    else if (i === 1) {
      text("Heal (even)", width / 2, 180 + i * 100);
    }
  }
}

function drawEndTurnButton() {
  let x = width - 130;
  let y = height - 180;

  if (state === 'playerTurn') {
    fill(180);
  } 
  else {
    fill(100);
  }
  rect(x, y, 180, 50);
  fill(0);
  textSize(24);
  text("End Turn", x, y);
}

function drawRetryButton() {
  fill(255);
  rect(width / 2, height / 2 + 20, 180, 50);
  fill(0);
  textSize(24);
  text("Retry", width / 2, height / 2 + 20);
}

function mousePressed() {  
  if (state === 'pregame') {
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
      mouseY > height / 2 + 50 && mouseY < height / 2 + 110) {
      startStage();  //begin the game
      return;
    }
  }
  if (state === 'gameOver') {
    //try again button
    if (mouseX > width / 2 - 90 && mouseX < width / 2 + 90 &&
        mouseY > height / 2 - 5 && mouseY < height / 2 + 45) {
      restartGame(); 
      return;
    }
    //back to pregame button
    if (mouseX > width / 2 - 90 && mouseX < width / 2 + 90 &&
      mouseY > height / 2 + 65 && mouseY < height / 2 + 115) {
      state = 'pregame';
      return;
    }
  }
  
  if (state !== 'playerTurn') {
    return;
  }

  // End Turn button
  if (mouseX > width - 220 && mouseX < width - 40 
  && mouseY > height - 205 && mouseY < height - 155) {
    endPlayerTurn();
    return;
  }

// dice selection
  let diceStartX = width - 100;
  let diceStartY = height - 100;
  
  for (let i = 0; i < dice.length; i++) {
    let diceX = diceStartX - i * 100;
    
    if (!usedDice.includes(i) &&  //if dice has NOT been used yet
    mouseX > diceX - 35 && mouseX < diceX + 35 &&  //if mouse is on this position
    mouseY > diceStartY - 35 && mouseY < diceStartY + 35) {
      
      if (selectedDie === i) {
        selectedDie = -1;
      }
      else {
        selectedDie = i;
      }
    return;
    } 
  }

// card selection
  for (let i = 0; i < 2; i++) { 
    let cy = 180 + i * 100;
    if (mouseX > width / 2 - 150 && mouseX < width / 2 + 150 &&
      mouseY > cy - 40 && mouseY < cy + 40) {
      let value = dice[selectedDie]; //get value of selected die 
      if (i === 0 && value >= 4) {
        enemyHP -= value;
        usedDice.push(selectedDie);
      } 
      else if (i === 1 && value % 2 === 0) {
        playerHP = min(30, playerHP + value);
        usedDice.push(selectedDie);
      }
      selectedDie = -1;  //sets die to used
      return;      
    }
  }
} //mousePressed ends here

function rollDice() {
  dice = [];
  usedDice = [];
  for (let i = 0; i < maxDice; i++) {
    dice.push(int(random(1, 7)));
  }
}

function endPlayerTurn() {
  selectedDie = -1;
  state = 'enemyTurn';
}

function enemyTurn() {
  lastEnemyDamage = 0;
  for (let i = 0; i < maxDice - 1; i++) {
    let val = int(random(1, 7));
    playerHP -= val;
    lastEnemyDamage += val;  //used to see the damage the enemy will deal
  }
  rollDice();
  state = 'playerTurn';  //changes state from "waiting" to "playerTurn"
}

function restartGame() {
  playerHP = 30;
  stage = 1;
  startStage(); 
}

function drawPregame() {
  textSize(40);
  fill(255);
  text("Dice Fight", width / 2, height / 2 - 100);
  //instructions
  textSize(20);
  fill(220);
  textSize(18);
  text("Instructions:", width / 2, height / 2 - 60);
  textSize(16);
  text("- Click a die then a card to use it", width / 2, height / 2 - 40);
  text("- Cards have conditions and will only accept certain dice", width / 2, height / 2 - 20);
  text("- Press End Turn to switch to the enemy's turn", width / 2, height / 2);
  text("- Defeat all enemies across 5 stages to win!", width / 2, height / 2 + 20);

  textSize(24);
  fill(200);
  rect(width / 2, height / 2 + 80, 200, 60);
  fill(0);
  text("Play", width / 2, height / 2 + 80);
}

function startStage() {  //most code in restartGame moved here
  enemyHP = 20 + stage * 5; // scales enemy hp, adding 5 each stage
  rollDice();   
  usedDice = [];
  selectedDie = -1;  
  lastEnemyDamage = 0;
  state = 'playerTurn';
}

function nextStage() {
  playerHP = min(30, playerHP + 5); //minimum 30 max hp, heal 5 after stage
  stage++;
  startStage(); // sets state back to 'playerTurn'
}

function drawBackButton() { 
  fill(255);
  rect(width / 2, height / 2 + 90, 180, 50);
  fill(0);
  textSize(24);
  text("Back", width / 2, height / 2 + 90);
}
