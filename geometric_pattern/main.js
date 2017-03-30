var NUM_CIRCLES = 14;
var cicleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    
    frameRate(4);
    
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/3;
    
    rVal = 255;
    gVal = 0;
    bVal = 0;
    
    
}
function draw() {
  var isShifted = false;

  var y = height;
  while (y >= 0) {

    var x;

    if (isShifted) {
      x = circleRadius;
    } else {
      x = 500;
    }

    while (x <= width) {
      fill(color(rVal, gVal, bVal));
      stroke(color(rVal, gVal, bVal));
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
      
      
    }

    y = y - circleRadius;
    isShifted = !isShifted;
    
    
    
    rVal = (rVal + 254) % 256;
    gVal = (gVal + 7) % 256;
    bVal = (bVal + 3) % 256;
  }
}

function keyPressed() {
  if (keyCode === 115 || keyCode === 83) {
    saveCanvas('geometricPattern', 'png');
  }
  return false;
}
