/*
************ Gibson Kwong *************
********* Face with for loops *********
** Click inside the face to change colors **
* Face smiles when hovered with the mouse *
*/
let faceColor = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  faceColor = color(255, 220, 180); // Default face color
}

function draw() {
  background(240, 200, 255); 

  //Instructions
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Click inside the face to change colors", width / 2, 40);

  // Checks if mouse is inside the face
  let d = dist(mouseX, mouseY, 200, 200);
  
  // Color of face
  fill(faceColor);

  ellipse(200, 200, 200, 200); // Face

  // Eyes
  for (let i = -1; i <= 1; i += 2) {
    fill(0);
    ellipse(200 + i * 40, 180, 20, 20);
  }

  // Smiles when hovering
  if (d < 100) {
    for (let x = 160; x <= 240; x += 5) {
      let y = 250 - 0.02 * (x - 200) * (x - 200); // Smile curve
      fill(0);
      ellipse(x, y, 5, 5);
    }
  } else {
    // Straight mouth when not hovering
    fill(0);
    rect(170, 240, 60, 5, 5);
  }
}

// Changes the face color when clicked inside the face
function mousePressed() {
  let d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
    // Changes face color when clicked
    faceColor = color(random(100, 255), random(100, 255), random(100, 255));
  }
}