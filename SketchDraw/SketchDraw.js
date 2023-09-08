let drawCount = 0;
let drawColor;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawColor = '#FF0000'
  
}

function draw() {
  
  if (drawCount % 2 === 1) {
  
    console.log('READY SET DRAW');
    
    push();
    noStroke();
    fill('#193EFF')
    textSize(20);
    text('R G B SPACE', 20, windowHeight - 20)
    pop();
    
    if (mouseIsPressed) {
      console.log(drawColor)
      stroke(drawColor);
      strokeWeight(3);
      line(pmouseX, pmouseY, mouseX, mouseY)
    }
    
  }
  
}

function keyPressed(){
  
  if (keyCode == '32') {
    clear();
  }
  
  if (keyCode == '68') {
    drawCount++
    clear();
  }
  
  if (keyCode == '82') {
    drawColor = '#FF0000';
  }
  
  if (keyCode == '71') {
    drawColor = '#00ff00';
  }
  
  if (keyCode == '66') {
    drawColor = '#0000ff';
  }
  
  
}


