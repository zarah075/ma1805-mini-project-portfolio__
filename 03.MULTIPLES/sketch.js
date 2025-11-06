/* 
Playing with mouse events: 
See https://p5js.org/reference/#/p5/mouseClicked 
*/

let select = 0; // Color of the shape
let size = 30; // Size of the shape
let rgba = [7, 7, 66, 150]; 

function setup() {
  noStroke(); 
  createCanvas(800, 800);
  background(111, 111, 166);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 50);
  }

  let sparkle = { 
  x: random(10,780), 
  y: random(10,780),
  emoji: '✨'
  }

  textSize(50);
  // Display flower object.
  text(sparkle.emoji, sparkle.x, sparkle.y);

  let star = { 
  x: random(10,780), 
  y: random(10,780),
  emoji: '🌟'
  }

  textSize(70);
  // Display flower object.
  text(star.emoji, star.x, star.y);

 let shoot = { 
  x: random(10,780), 
  y: random(10,780),
  emoji: '💫'
  }

  textSize(70);
  // Display flower object.
  text(shoot.emoji, shoot.x, shoot.y);
}

function mouseClicked() {
  
   console.log('select: '+select); 
  
  rgba[select] = random(0,255); // Set r, g, or b 
  rgba[3] = random(5,50); // Set alpha (transparency) 
  select++; // Increment select by 1
 
  if(select >= 3){ // if select is greater or equal to...
    console.log('reset select'); 
    select = 0; 
  }
  return false; // mouseClicked expects this
}

