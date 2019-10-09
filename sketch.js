let taps = [];

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
  frameRate(20);
}

function draw() {
  background(220);
  
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
      
    case (s>11000 && s<13000):
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
      
    case (s>13000 && s<16000):
      clrBcgrnd(200,250)
      skip1.display();
      break;
      
    case (s>16000 && s<18000):
      clrBcgrnd(150,250)
      skip1.display();
      skip2.display();
      skip3.display();
      break;
      
    case (s>18000 && s<20000):
      clrBcgrnd(10,250)
      skip1.display();
      skip4.display();
      skip5.display();
      break;
      
    case (s>20000 && s<23000):
      clrBcgrnd(0,250)
      skip1.display();
      skip2.display();
      skip3.display();
      skip4.display();
      skip5.display();
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

function clrBcgrnd(clr1, clr2){
  background(random(clr1,clr2), 255, random(clr1,clr2));
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