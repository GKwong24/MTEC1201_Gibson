/*
************ Gibson Kwong *************
******** Snowman with for loops ********
** Click inside the face to change colors **
**** Smiles when hovered with the mouse ****
*/

let faceColor;

function setup() {
  createCanvas(400, 400);
  noStroke();
  faceColor = 255;
}

function draw() {
  background(200, 230, 255);

  // Instructions
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Click on the face to change colors", width / 2, 40);

  // Checks if mouse is inside the face
  let d = dist(mouseX, mouseY, 200, 200);

  // Face
  fill(faceColor);
  ellipse(200, 200, 200, 200);

  // Top Hat
  fill(0);
  rect(150, 60, 100, 50); // Top part
  rect(130, 110, 140, 12); // Brim

  // Eyes
  fill(0);
  for (let i = -1; i <= 1; i += 2) {
    ellipse(200 + i * 30, 180, 15, 15);
  }

  // Nose
  fill(255, 150, 0);
  triangle(200, 200, 240, 205, 200, 210);

  // Smile
  fill(0);
  if (d < 100) {
    // Smile when hovering
    for (let x = 160; x <= 240; x += 5) {
      let y = 260 - 0.02 * (x - 200) * (x - 200);
      ellipse(x, y, 4, 4);
    }
  } else {
    // Neutral face
    rect(170, 255, 60, 5, 5);
  }
}

// Changes the face color when clicked inside the face
function mousePressed() {
  let d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
    faceColor = color(random(220, 255), random(220, 255), random(240, 255));
  }
}
