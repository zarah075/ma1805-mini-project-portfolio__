let hum; 
let img;
let img2;
let img3;
let img4;
let isStopped = true;

function preload(){
  hum = loadSound("20.10.20.mp3");
  img = loadImage('endsars1.jpg');
  img2 = loadImage('endsars2.jpeg');
  img3 = loadImage('endsars3.jpeg');
  img4 = loadImage('endsars4.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (img4)
}

function draw() {
  image(img, 500, 0, 500, 500);
  image(img2, 0, 0, 300, 350);
  image(img3, 1100, 500, 300, 290);
 
}


function mouseClicked(){
  hum.amp(0.2); 
  if (isStopped === true) {
    // If the beat is stopped, play it.
    hum.play();
    isStopped = false;
  } else {
    // If the beat is playing, stop it.
    hum.stop();
    isStopped = true;
  }
}

