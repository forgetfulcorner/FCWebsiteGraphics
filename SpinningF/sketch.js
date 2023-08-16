let themeColor = '#193EFF';
let spinDegs = 0;
let addTrue = 0;
let rotDir = 1;
let startSpin = 1;
let counter = 0;

function setup() {
  createCanvas(windowHeight, windowHeight);
  
  angleMode(DEGREES);
  
  noStroke();
  textSize(width * 0.35);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  
  frameRate(60);
  
}

function draw() {
  
  translate(height/2, height/2)
  
  fill(themeColor);
  circle(0, 0, width);
  
  spinDir();
  
  if (startSpin == 0) {
    
    } else {
      if (rotDir == -1) {
      spinDegs --
    } else {
      spinDegs ++
    }
  }
  
  push();
  rotate(spinDegs * 0.5);
  fill('#FFF');
  text('F', 0, 0);
  pop();

}



function spinDir() {
  
  if ( dist(height * 0.5, height * 0.5, mouseX, mouseY) > height * 0.4) {
    
    startSpin = 1;
    addTrue = 0;
    
  } else {
    
    startSpin = 0;
    
    if (addTrue == 0) {
      counter++
    }
    
    addTrue = 1;
    
    if (counter % 2 == 1) {
      rotDir = 1;
    } else {
      rotDir = -1;
    }

  }
  
}