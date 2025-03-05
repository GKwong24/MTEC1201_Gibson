/*
/////////////////////////
//        Lake         //
//   by Gibson Kwong   //
/////////////////////////
A nature theme has a lot of potential, a lake is a nice and simple introduction to it

*/

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(142, 201, 139);
  //sky
  fill(148, 227, 224);
  rect(0,0,1280,260,)

  //sun
  strokeWeight(1);
  fill(255, 200, 0);
	ellipse(200, 100, 100, 100);

  //tree trunk
  fill(150,120,50);
  rect(1050,250,30,90);

  //tree foilage
  fill(50,180,80);
  triangle(1010,275,1125,275,1065,225);
  triangle(1015,245,1120,245,1065,195);
  triangle(1020,215,1115,215,1065,165);
  
  //flower stem
  fill(135, 222, 91);
  rect(1005,628,10,30);
  //flower
  fill(232, 166, 237);
  ellipse(995,600,30,30);
  ellipse(1010,585,30,30);
  ellipse(1010,615,30,30);
  ellipse(1025,600,30,30);
  fill(219, 227, 68);
  ellipse(1010,600,35,35);

  //lake
  strokeWeight(3);
  fill(190,200,220);
  ellipse(640, 460, 600, 200);

  //fish1
  strokeWeight(1);
  fill(51, 139, 171);
  ellipse(700, 400, 40, 20);
  triangle(680,400,660,410,660,390);
  //fish2
  ellipse(650, 450, 30, 20);
  triangle(635,450,625,460,625,440);

  
}
