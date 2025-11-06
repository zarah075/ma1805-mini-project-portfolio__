let select = 0
let colours = [[115, 42, 161], [82, 6, 27], [87, 149, 150], [150, 87, 123]]
let i = 0;



function setup() {
createCanvas(windowHeight, windowWidth, WEBGL);
}

function draw() {
  rotateZ (frameCount * 0.05);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (50, 50, 50);

  rotateX(frameCount * 0.01);
  triangle(-20, 25, 8, -30, 36, 25);
  noStroke();

  rotateZ (frameCount * 0.05);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (50, 50, 50);

  rotateY(frameCount * 0.01);
  triangle(-20, 25, 8, -30, 36, 25);
  noStroke();

  rotateZ (frameCount * 0.05);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (580, 350 ,120)

  rotateY(frameCount * 0.01);
  noStroke();
  triangle(-20, 25, 8, -30, 36, 25);
  
}

function mouseClicked(){
 if(select==0){
  select = 1;
 }else{
  select = 0;
 }
}