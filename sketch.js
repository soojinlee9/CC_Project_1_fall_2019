let taps = []; //
let lights = [];

function setup() {
  createCanvas(400, 400);
  taps[0] = new Tap(180,170);
  taps[1] = new Tap(60,170);
  taps[2] = new Tap(300,170);
  skip1 = new Skip(180,170);
  skip2 = new Skip(60,60);
  skip3 = new Skip(300,280);
  skip4 = new Skip(60,280);
  skip5 = new Skip(300,60);
  lightning1 = new Lightning(100,100);
  jump1 = new Jump(130,150);
  frameRate(20);
}

function draw() {
  background(120);
  
 let s = millis();
  
  switch(true) {
    case (s>=0 && s<3000):
      changingBcgnd(100,130);
      quadrants(40);
      fill(220,50);
      stroke(0);
      taps[0].display();
      break;

    case (s>=3000 && s<6000):
      changingBcgnd(130,160);
      quadrants(60);
      fill(220,100);
      stroke(0);
      taps[1].display();
      break;
    
    case (s>=6000 && s<8000):
      changingBcgnd(160,190);
      quadrants(80);
      fill(220,150);
      stroke(0);
      taps[2].display();
      break;
      
    case (s>=8000 && s<11000):
      changingBcgnd(190,220);
      quadrants(100);
      fill(220,200);
      stroke(0);
      for (let i=0; i<3;i++){
        taps[i].display();
      }
      break;
      
    case (s>=11000 && s<13000):
      changingBcgnd(220,250);
      quadrants(120);
      fill(220,255);
      stroke(0);
      for (let i=0; i<3;i++){
        let x = 60 + 120 * i;
        let y = 60;
        taps[i] = new Tap(x,y);
        taps[i].display();
      }
      for (let i=0; i<3;i++){
        let x = 60 + 120 * i;
        let y = 280;
        taps[i] = new Tap(x,y);
        taps[i].display();
      }
      break;
      
    case (s>=13000 && s<15000):
      clrLitng();
      for (let i=0; i<20; i++){
        x = random(200) *2;
        y = random(200) *2;
        lights[i] = new Lightning(x,y);
        lights[i].display();
      }
      break;
      
    case (s>=15000 && s<18000):
      clrBcgrnd(200,250,200,250);
      strokeWeight(1);
      stroke(0);
      skip1.display();
      break;
      
    case (s>=18000 && s<20000):
      clrBcgrnd(150,250,150,250);
      skip1.display();
      skip2.display();
      skip3.display();
      break;
      
    case (s>=20000 && s<22000):
      clrBcgrnd(10,250,10,250);
      skip1.display();
      skip4.display();
      skip5.display();
      break;
      
    case (s>=22000 && s<25000):
      clrBcgrnd(0,250,0,250);
      skip1.display();
      skip2.display();
      skip3.display();
      skip4.display();
      skip5.display();
      break;
			
	case (s>=25000 && s<28000):
		clrBcgrnd(240,255,0,200);
		jump1.display();
		break;
  }
}

function changingBcgnd(light,dark){
  background(random(light,dark));
}

class Tap {
  constructor(x_,y_) {
    this.x = x_;
    this.y = y_;
  }
  
  display(){
    line(this.x,this.y,this.x-10,this.y+50); 
    line(this.x+40,this.y,this.x+50,this.y+50);
    line(this.x+50,this.y+50,this.x+70,this.y+50);
    
    let i = second();
    if (i % 2  == 0) {
      line(this.x-28, this.y+40, this.x-10, this.y+50);
    } else {
      line(this.x-10, this.y+50, this.x-30, this.y+50);
    }
  }
}

function clrBcgrnd(rclr1, rclr2, bclr1, bclr2){
  background(random(rclr1,rclr2), 255, random(bclr1,bclr2));
}

class Skip {
  constructor(x_,y_){
    this.x = x_;
    this.y = y_;
  }
  
  display(){
    
    let i = second();
    if (i % 2  == 0) {
      line(this.x,this.y,this.x-20,this.y+30);
      line(this.x-20,this.y+30,this.x,this.y+50);
      line(this.x+40,this.y,this.x+60,this.y+10);
      line(this.x+60,this.y+10,this.x+40,this.y+30);
    } else {
      line(this.x,this.y,this.x-20,this.y+10);
      line(this.x-20,this.y+10,this.x,this.y+30);
      line(this.x+40,this.y,this.x+60,this.y+30);
      line(this.x+60,this.y+30,this.x+40,this.y+50);
    }
  }
}


function quadrants(max){
  thoughtBubble(0,max,0,max);
  thoughtBubble(width-max,width,0,max);
  thoughtBubble(0,max,height-max,height);
  thoughtBubble(width-max,width,height-max,height);
}

function thoughtBubble(x_min,x_mx,y_min,y_mx){
  let s = millis();
  let x = random(x_min,x_mx);
  let y = random(y_min,y_mx);
  let diam = random(s/100);
  noStroke();
  ellipse(x,y,diam, diam);
}

class Lightning {
  constructor(start_x,start_y){
    this.xs = start_x;
    this.ys = start_y;
  }
  
  display(){
    line(this.xs,this.ys,this.xs-20,this.ys+40);
    line(this.xs-20,this.ys+40,this.xs,this.ys+40);
    line(this.xs,this.ys+40,this.xs-20,this.ys+80);
    line(this.xs-20,this.ys+80,this.xs+20,this.ys+30);
    line(this.xs+20,this.ys+30,this.xs,this.ys+30);
    line(this.xs,this.ys+30,this.xs+20,this.ys);
    line(this.xs+20,this.ys,this.xs,this.ys);
  }             
}

function clrLitng(){
  let r = random(200,255);
  let g = random(190,255);
  let b = random(205,255);
  strokeWeight(3);
  stroke(r,g,b);
}

class Jump {
  constructor(x_,y_) {
    this.x = x_;
    this.y = y_;
  }
  
  display(){

    line(this.x,this.y,this.x+40,this.y+50);
    line(this.x+140,this.y,this.x+100,this.y+50);
  
    let i = second();
    if (i % 2  == 0) {
      line(this.x+40,this.y+70,this.x+10,this.y+90);
      line(this.x+10,this.y+90,this.x+40,this.y+100);
      line(this.x+100,this.y+70,this.x+130,this.y+90);
      line(this.x+130,this.y+90,this.x+100,this.y+100);
    } else {
      line(this.x+40,this.y+70,this.x,this.y+120);
      line(this.x+100,this.y+70,this.x+140,this.y+120);
    }
  }
}