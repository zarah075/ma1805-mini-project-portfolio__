let select = 0
let colours = [[115, 42, 161], [82, 6, 27], [87, 149, 150], [150, 87, 123]]
let i = 0;



function setup() {
createCanvas(800, 800, WEBGL);
}

function draw() {
  rotateZ (frameCount * 0.07);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (50, 50, 50);

  rotateX(frameCount * 0.01);
  triangle(-20, 25, 8, -30, 36, 25);
  noStroke();

  rotateZ (frameCount * 0.05);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (100, 5, 20);

  rotateY(frameCount * 0.01);
  triangle(-30, 25, 10, -60, 76, 58);
  noStroke();

  rotateZ (frameCount * 0.07);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (580, 350 ,120)

  rotateY(frameCount * 0.01);
  noStroke();
  triangle(-20, 25, 8, -30, 36, 25);

  rotateZ (frameCount * 0.05);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (750, 400, 60)

  rotateZ (frameCount * 0.04);
  fill (colours[int(random(0, 4))]);
  noStroke();
  rect (380, 150 ,20, 10)

  rotateZ (frameCount * 0.07);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (790, 300, 100)

  rotateY (frameCount * 0.07);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (790, 330, 100)

  rotateY (frameCount * 0.07);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (790, 330, 100)

  rotateY (frameCount * 0.07);
  fill (colours[int(random(0, 4))]);
  noStroke();
  circle (790, 330, 100)

  
}