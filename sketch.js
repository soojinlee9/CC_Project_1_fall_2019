function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  line(180,170,170,220);
  line(220,170,230,220);
  
 
  line(230,220,250,220);
  
  tap();
  
}

function tap() {
let i = second();
    if (i % 2  == 0) {
      line(152, 210, 170, 220);
    } else {
      line(170, 220, 150, 220);
    }
}
