//1 for day, 2 for night, 3 for day/night?  Press r to reset

let scene = 1;
//scene 1
let cloudX = 0;
let cloudY = 0;
//scene 2
let cmoonX = 0;
let starX1, starY1, starSize1;
let starX2, starY2, starSize2;
let starX3, starY3, starSize3;
let starX4, starY4, starSize4;
let starX5, starY5, starSize5;
let starX6, starY6, starSize6;



function setup()
{
  createCanvas(700,700)
  resetScene();
 /* //scene1
  cloudXRandom = cloudX + random(-50,400);
  cloudXRandom2 = cloudX + random(50,500);
  cloudXRandom3 = cloudX + random(0,2450);
  cloudYRandom = cloudY + random(20,400);
  cloudYRandom2 = cloudY + random(20,400);
  cloudYRandom3 = cloudY + random(20,400);
  //scene2
  cmoonX = width/4 - 120
  starX1 = random(0, width); starY1 = random(0, 400); starSize1 = random(5, 10);
  starX2 = random(0, width); starY2 = random(0, 400); starSize2 = random(5, 10);
  starX3 = random(0, width); starY3 = random(0, 400); starSize3 = random(5, 10);
  starX4 = random(0, width); starY4 = random(0, 400); starSize4 = random(5, 10);
  starX5 = random(0, width); starY5 = random(0, 400); starSize5 = random(5, 10);
  starX6 = random(0, width); starY6 = random(0, 400); starSize6 = random(5, 10);   moved to function resetScene()
*/


}

function draw()
{
  background(0);

  if (scene == 1) 
  {
    doScene1();
  } 
  else if (scene == 2) 
  {
    doScene2();
  } 
  else if (scene == 3) 
  {
    doScene3();
  }
    
}



function keyPressed() 
{
 if (key == '1') 
 {
   scene = 1;
 } 
 else if (key == '2') 
 {
   scene = 2;
 } 
 else if (key =='3') 
 {
   scene = 3;
 }
 else if (key == 'r' || key == 'R') { // resets scene when r is pressed
  resetScene();
 }
}

function resetScene(){  //random variables placed here to allow new locations on refresh
  //scene1 
  cloudXRandom = cloudX + random(-50,400);
  cloudXRandom2 = cloudX + random(50,500);
  cloudXRandom3 = cloudX + random(0,2450);
  cloudYRandom = cloudY + random(20,400);
  cloudYRandom2 = cloudY + random(20,400);
  cloudYRandom3 = cloudY + random(20,400);
  //scene2 
  cmoonX = width/4 - 120
  starX1 = random(0, width); starY1 = random(0, 400); starSize1 = random(5, 10);
  starX2 = random(0, width); starY2 = random(0, 400); starSize2 = random(5, 10);
  starX3 = random(0, width); starY3 = random(0, 400); starSize3 = random(5, 10);
  starX4 = random(0, width); starY4 = random(0, 400); starSize4 = random(5, 10);
  starX5 = random(0, width); starY5 = random(0, 400); starSize5 = random(5, 10);
  starX6 = random(0, width); starY6 = random(0, 400); starSize6 = random(5, 10);
}



function doScene1() 
{
  

  background(135, 206, 235);
  noStroke(); //sun
  fill(255,225,0);
  ellipse(width/4, height/4, 100, 100); 
  drawCloud(cloudX+cloudXRandom, cloudY+cloudYRandom); //places clouds at these coords
  drawCloud(cloudX+cloudXRandom2, cloudY+cloudYRandom2);
  drawCloud(cloudX+cloudXRandom3, cloudY+cloudYRandom3);
  cloudX += 0.5;
  fill(200); //mountain1
  triangle(100,height,500,height,300,400); 
  fill(220); //mountain2
  triangle(250,height,550,height,400,500); 

}

function drawCloud(cloudX, cloudY){ //Function to create clouds
  fill(240); //cloud
  ellipse(cloudX-25, cloudY+5, 40, 40); //Left 
  ellipse(cloudX, cloudY, 50, 50); //Middle
  ellipse(cloudX+25, cloudY+5, 40, 40); //Right

}





function doScene2() 
 {
  background(30,30,30);
  noStroke(); //moon
  fill(255,255,255);
  ellipse(width/4, height/4, 100, 100); 
  fill(30,30,30);
  ellipse(cmoonX, height/4, 100, 100);//crescent 
  fill(200); //mountain1
  triangle(100,height,500,height,300,400); 
  fill(220); //mountain2
  triangle(250,height,550,height,400,500);
  cmoonX += 0.2;
  fill(255);
  ellipse(starX1, starY1, starSize1, starSize1);
  ellipse(starX2, starY2, starSize2, starSize2);
  ellipse(starX3, starY3, starSize3, starSize3);
  ellipse(starX4, starY4, starSize4, starSize4);
  ellipse(starX5, starY5, starSize5, starSize5);
  ellipse(starX6, starY6, starSize6, starSize6);
    
  } 
  






 function doScene3() 
 {
  
 }

 
