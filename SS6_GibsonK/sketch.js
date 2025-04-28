let xPositions = [];     // x coordinates
let yPositions = [];     // y coordinates
let circleColors = [];   // color of circles

let colorInput;          // input field for color

function setup() {
  createCanvas(800, 600);
  background(220);

  // input field for color
  colorInput = createInput('blue');
  colorInput.position(10, height + 10);
  colorInput.input(updateColor);

  let label = createP("Enter a color:");
  label.position(10, height - 30);
}

function draw() {
  background(220);

  noStroke();

  // draws circles with their colors
  for (let i = 0; i < xPositions.length; i++) {
    fill(circleColors[i]);
    ellipse(xPositions[i], yPositions[i], 20, 20);
  }
}

function mousePressed() {
  // check if clicked inside the canvas
  if (mouseY <= height) {
    xPositions.push(mouseX); //.push adds new value to array
    yPositions.push(mouseY);
    circleColors.push(colorInput.value()); // saves current input color
  }
}

function updateColor() {
}