//   Day/Night by Gibson Kwong
//   Press 1 for a day scene and 2 for a night scene.
//   Press 3 to see day turn into night.
//   Press R to reset scenes

let scene = 1;
//scene 1
let cloudX = 0;
let cloudY = 0;
//scene 2
let cmoonX = 0;
let starX1 = 0, starY1 = 0, starSize1 = 0;
let starX2 = 0, starY2 = 0, starSize2 = 0;
let starX3 = 0, starY3 = 0, starSize3 = 0;
let starX4 = 0, starY4 = 0, starSize4 = 0;
let starX5 = 0, starY5 = 0, starSize5 = 0 ;
let starX6 = 0, starY6 = 0, starSize6 = 0;
//scene 3
let t = 0
let starFade = 0



function setup()
{
  createCanvas(700,700)
  resetScene();

}

function draw()
{


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

function resetScene(){  //resets these values on pressing r
  //scene1 
  cloudXRandom = cloudX + random(-50,400);
  cloudXRandom2 = cloudX + random(50,500);
  cloudXRandom3 = cloudX + random(0,2450);
  cloudYRandom = cloudY + random(20,400);
  cloudYRandom2 = cloudY + random(20,400);
  cloudYRandom3 = cloudY + random(20,400);
  //scene2 
  cmoonX = width/4 - 120
  starX1 = random(0, width); starY1 = random(0, 350); starSize1 = random(5, 20);
  starX2 = random(0, width); starY2 = random(0, 350); starSize2 = random(5, 20);
  starX3 = random(0, width); starY3 = random(0, 350); starSize3 = random(5, 20);
  starX4 = random(0, width); starY4 = random(0, 350); starSize4 = random(5, 20);
  starX5 = random(0, width); starY5 = random(0, 350); starSize5 = random(5, 20);
  starX6 = random(0, width); starY6 = random(0, 350); starSize6 = random(5, 20);
  //scene3
  t = 0;
  starFade = 0;
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
  cloudXRandom += 0.5;
  cloudXRandom2 += 0.5;
  cloudXRandom3 += 0.5;
  if (cloudXRandom > width + 45){  //resets clouds to the left when they cross the border
    cloudXRandom = -50;
    cloudYRandom = random(20,400);
  }
  else if (cloudXRandom2 > width + 45){
    cloudXRandom2 = -50;
    cloudYRandom2 = random(20,400);
  }
  else if (cloudXRandom3 > width + 45){
    cloudXRandom3 = -50;
    cloudYRandom3 = random(20,400);
  }
  fill(200); //mountain1
  triangle(100,height,500,height,300,400);
  fill(240);
  triangle(233,500,367,500,300,400) 
  fill(220); //mountain2
  triangle(250,height,550,height,400,500);
  fill(240);
  triangle(348,570,452,570,400,500)

  fill (180,255,180);//land
  rect(0,680,width)

}

function drawCloud(cloudX, cloudY){ //Function to create clouds
  fill(240); //cloud
  ellipse(cloudX-25, cloudY+5, 40, 40); //Left 
  ellipse(cloudX, cloudY, 50, 50); //Middle
  ellipse(cloudX+25, cloudY+5, 40, 40); //Right

}//scene1 end





function doScene2() 
 {
  background(30,30,30);
  noStroke();
  fill(200); //mountain1
  triangle(100,height,500,height,300,400);
  fill(240);
  triangle(233,500,367,500,300,400) 
  fill(220); //mountain2
  triangle(250,height,550,height,400,500);
  fill(240);
  triangle(348,570,452,570,400,500)
  cmoonX += 0.2;
  fill(255,255,255); //moon
  ellipse(width/4, height/4, 100, 100); 
  fill(30,30,30);//crescent 
  ellipse(cmoonX, height/4, 100, 100);
  fill(255,255,0); //stars
  ellipse(starX1, starY1, starSize1, starSize1);
  ellipse(starX2, starY2, starSize2, starSize2);
  ellipse(starX3, starY3, starSize3, starSize3);
  ellipse(starX4, starY4, starSize4, starSize4);
  ellipse(starX5, starY5, starSize5, starSize5);
  ellipse(starX6, starY6, starSize6, starSize6);
  fill (180,255,180);//land
  rect(0,680,width)


 }//scene2 end
  



 
 function doScene3() 
 {
  let skyR = lerp(135,10,t);
  let skyG = lerp(206,10,t);
  let skyB = lerp(235,10,t);
  let sunmoonR = lerp(255,255,t);
  let sunmoonG = lerp(225,255,t);
  let sunmoonB = lerp(0, 255, t);


  background(skyR, skyG, skyB)
  noStroke(); 
  fill(200); //mountain1
  triangle(100,height,500,height,300,400);
  fill(240);
  triangle(233,500,367,500,300,400) 
  fill(220); //mountain2
  triangle(250,height,550,height,400,500);
  fill(240);
  triangle(348,570,452,570,400,500)
  fill(sunmoonR,sunmoonG,sunmoonB); //sun / moon
  ellipse(width/4, height/4, 100, 100); 
  t = constrain(t+0.002,0,1); //constrain keeps t between values 0 and 1
  if (t>0.6){
    fill(255,255,0,starFade); //stars
    ellipse(starX1, starY1, starSize1, starSize1);
    ellipse(starX2, starY2, starSize2, starSize2);
    ellipse(starX3, starY3, starSize3, starSize3);
    ellipse(starX4, starY4, starSize4, starSize4);
    ellipse(starX5, starY5, starSize5, starSize5);
    ellipse(starX6, starY6, starSize6, starSize6);
    starFade += 1.5;
  } //end of stars
  fill (180,255,180);//land
  rect(0,680,width)
}//scene3 end



 