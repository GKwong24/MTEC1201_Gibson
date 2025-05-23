/********** Gibson Kwong **************
** Recreation of Midterm using Class **
*/

let sceneManager;

function setup() {
  createCanvas(700, 700);
  sceneManager = new SceneManager();
  sceneManager.reset();
}

function draw() {
  sceneManager.draw();
}

function keyPressed() {
  sceneManager.keyPressed(key);
}

// Class for creating cloud and handling its position
class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(speed = 0.5) {
    this.x += speed;
    if (this.x > width + 45) {
      this.x = -50;
      this.y = random(20, 400);
    }
  }

  draw() {
    noStroke(); // Removed outline
    fill(240);
    ellipse(this.x - 25, this.y + 5, 40, 40);
    ellipse(this.x, this.y, 50, 50);
    ellipse(this.x + 25, this.y + 5, 40, 40);
  }
}

// Class for creating and resetting stars
class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(0, width);
    this.y = random(0, 350);
    this.size = random(5, 20);
  }

  draw(alpha = 255) {
    fill(255, 255, 0, alpha);
    ellipse(this.x, this.y, this.size);
  }
}

// Manages scenes and the objects created in each scene
class SceneManager {
  constructor() {
    this.scene = 1;
    this.t = 0;
    this.starFade = 0;
    this.clouds = [];
    this.stars = [];

    for (let i = 0; i < 3; i++) {
      this.clouds.push(new Cloud(random(-50, 500), random(20, 400)));
    }

    for (let i = 0; i < 6; i++) {
      this.stars.push(new Star());
    }

    this.cmoonX = 0;
  }

  drawInstructions() {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Press 1 for Day Scene", 10, 10);
    text("Press 2 for Night Scene", 10, 30);
    text("Press 3 for Day to Night Transition", 10, 50);
    text("Press R to Reset", 10, 70);
  }

  reset() {
    this.clouds.forEach(cloud => {
      cloud.x = random(-50, 500);
      cloud.y = random(20, 400);
    });
    this.stars.forEach(star => star.reset());
    this.t = 0;
    this.starFade = 0;
    this.cmoonX = width / 4 - 120;
  }

  keyPressed(key) {
    if (key === '1') this.scene = 1;
    else if (key === '2') this.scene = 2;
    else if (key === '3') this.scene = 3;
    else if (key === 'r' || key === 'R') this.reset();
  }

  draw() {
    if (this.scene === 1) this.drawScene1();
    else if (this.scene === 2) this.drawScene2();
    else if (this.scene === 3) this.drawScene3();

    this.drawInstructions();
  }

  drawMountainsAndLand() {
    fill(200); triangle(100, height, 500, height, 300, 400);
    fill(240); triangle(233, 500, 367, 500, 300, 400);
    fill(220); triangle(250, height, 550, height, 400, 500);
    fill(240); triangle(348, 570, 452, 570, 400, 500);
    fill(180, 255, 180); rect(0, 680, width, 20);
  }

  drawScene1() {
    background(135, 206, 235);
    fill(255, 225, 0); // sun
    ellipse(width / 4, height / 4, 100, 100);
    this.clouds.forEach(cloud => {
      cloud.move();
      cloud.draw();
    });
    this.drawMountainsAndLand();
  }

  drawScene2() {
    background(30);
    this.drawMountainsAndLand();
    this.cmoonX += 0.2;

    // Full moon only – no eclipse
    fill(255, 225, 0);
    ellipse(width / 4, height / 4, 100, 100);
    
    // Moving moon that gradually covers the sun
    fill(30);
    ellipse(this.cmoonX, height / 4, 100, 100);
    
    this.cmoonX += 0.1;
    if (this.cmoonX > width) {
      this.cmoonX = -100; // reset moon to start position
    }
    this.stars.forEach(star => star.draw());
  }

  drawScene3() {
    let skyR = lerp(135, 10, this.t);
    let skyG = lerp(206, 10, this.t);
    let skyB = lerp(235, 10, this.t);
    let sunmoonR = lerp(255, 255, this.t);
    let sunmoonG = lerp(225, 255, this.t);
    let sunmoonB = lerp(0, 255, this.t);

    background(skyR, skyG, skyB);
    this.drawMountainsAndLand();
    fill(sunmoonR, sunmoonG, sunmoonB);
    ellipse(width / 4, height / 4, 100, 100);

    this.t = constrain(this.t + 0.002, 0, 1);
    if (this.t > 0.6) {
      this.stars.forEach(star => star.draw(this.starFade));
      this.starFade += 1.5;
    }
  }
}