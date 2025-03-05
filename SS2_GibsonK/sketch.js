/*
/////////////////////////
//        River 2      //
//        Gibson K.    //
/////////////////////////
Added responsive features to the previous drawing and changed the lake to a river
Press mouse to change the color of the petals
*/

//fish
let fish1 = 0
let fish2 = -65

//for petal colors
let petalR = 232;
let petalG = 166;
let petalB = 237;
let petal2R = 232;
let petal2G = 166;
let petal2B = 237;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(142, 201, 139); //grass
  //sky
  fill(148, 227, 224);
  rect(0,0,1280,260,)



  //tree trunk
  fill(150,120,50);
  rect(1050,250,30,90);

  //tree foilage
  fill(50,180,80);
  triangle(1010,275,1125,275,1065,225);
  triangle(1015,245,1120,245,1065,195);
  triangle(1020,215,1115,215,1065,165);
  

  
  //river
  strokeWeight(3);
  fill(190,200,220);
  rect(0,380,1280,170);

  //fish1
  strokeWeight(1);
  fill(51, 139, 171);
  ellipse(fish1, 420, 40, 20);
  triangle(fish1 - 20,420,fish1 - 40,430,fish1 - 40,410);
  fish1++;
  //fish2
  ellipse(fish2, 470, 30, 20);
  triangle(fish2 - 15,470,fish2 - 30,480, fish2 - 30,460);
  fish2++;

  //flower
  fill(petalR, petalG, petalB);
  ellipse(995,600,30,30);
  ellipse(1010,585,30,30);
  ellipse(1010,615,30,30);
  ellipse(1025,600,30,30);
  fill(219, 227, 68);
  ellipse(1010,600,35,35);

  //flower stem
  fill(135, 222, 91);
  rect(1005,628,10,30);
  //flower
  fill(petalR, petalG, petalB);
  ellipse(995,600,30,30);
  ellipse(1010,585,30,30);
  ellipse(1010,615,30,30);
  ellipse(1025,600,30,30);
  fill(219, 227, 68);
  ellipse(1010,600,35,35);

  //flower stem
  fill(135, 222, 91);
  rect(1005 - 200,628 + 30,10,30);
  //flower2
  fill(petal2R, petal2G, petal2B);
  ellipse(995 - 200,600 + 30,30,30);
  ellipse(1010 - 200,585 + 30,30,30);
  ellipse(1010 - 200,615 + 30,30,30);
  ellipse(1025 - 200,600 + 30,30,30);
  fill(219, 227, 68);
  ellipse(1010 - 200,600 + 30,35,35);

  //sun
  strokeWeight(1);
  fill(255, 200, 0);
  ellipse(mouseX - 100, mouseY - 100, 100, 100);
  
}

function mousePressed() //changes petal colors on click
{
  petalR = random(255);
  petalG = random(255);
  petalB = random(255);

  petal2R = random(255);
  petal2G = random(255);
  petal2B = random(255);

}
