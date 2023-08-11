let currentTime;
let startTime = 9; //Start time of timer, hour in 24 hour intervals.
let endTime = 19; //End time of timer, hour in 24 hour intervals.

let currentTimeMapped;
let startTimeMapped;
let endTimeMapped;

let starNum = 30;
let themeColor = '#193EFF';
let highlightColor = '#F8D41A'; 

let randPosXArray = [];
let randPosYArray = [];
let randSizeArray = [];

function setup() {
  createCanvas(windowHeight, windowHeight);
  
  ellipseMode(CENTER);
  angleMode(DEGREES);
  
  startTime = startTime * 3600;
  endTime = endTime * 3600;
  
  for (let i = 0; i < starNum; i++) {
    append(randPosXArray, random(0, width));
    append(randPosYArray, random(0, width));
    append(randSizeArray, random(width * 0.02, width * 0.10));
  }
  
  
}

function draw() {
  // background(220);
  clear();
  
  currentTime = (hour() * 3600) + (minute() * 60) + (second() * 1);

  currentTimeMapped = map(currentTime, 0, 12 * 3600, 0, 360);
  startTimeMapped = map(startTime, 0, 12 *3600, 0, 360);
  endTimeMapped = map(endTime, 0, 12 *3600, 0, 360);
  
  push();
  noFill();
  stroke(themeColor);
  strokeWeight(width * 0.02);
  circle(width/2, height/2, width * 0.98)
  pop();
  
  translate(width/2, height/2);
  rotate(270)
  
  if ((currentTime > startTime && currentTime < endTime)) {
    
  push();
  noStroke();
  fill(themeColor);
  arc(0, 0, width * 0.85, width * 0.85, currentTimeMapped, endTimeMapped)
  pop();
  
  console.log('----------------')
  console.log(endTime - currentTime)
   
  }
  
  
  ////////////////////////////////////////// TIME OFF STARS
  
//   if ((endTime-currentTime <= 0)) {

//     push();
//     fill(themeColor);
//     noStroke();
//     circle(0,0, width * 0.85)
//     pop();
    
//     for (let i = 0; i < starNum; i++) {
      
//       if (dist(randPosXArray[i], randPosYArray[i], width/2, width/2) < width * 0.35) {
//         push();
//         translate(-width/2,-width/2)
//         noStroke();
//         fill(highlightColor);
//         circle(randPosXArray[i],randPosYArray[i],randSizeArray[i])
//         pop();
//       }

//     }
    
//   }
  
  ////////////////////////////////////////// TIME OFF ZZZ

//   if ((endTime-currentTime <= 0)) {
    
//     push();
//     rotate(-90);
//     noStroke();
//     fill(themeColor);
//     textAlign(CENTER, CENTER);
//     textStyle(BOLD);
//     textSize(width * 0.2);
//     text('Z', 0, 0)
//     text('Z', width * 0.15, width * -0.12)
//     text('Z', width * -0.15, width * 0.12)
//     pop();
    
//   }
  
  ////////////////////////////////////////// SPINNING F

  if ((endTime-currentTime <= 0)) {
    
    push();
    rotate(90 + millis() * 0.01);
    noStroke();
    fill(themeColor);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(width * 0.5);
    text('F', 0, 0)
    pop();
    
    
  }
  
}

function keyPressed() {
    if (keyCode == '83') {
        saveCanvas('clock', 'png');
    }
}


