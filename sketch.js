function setup() {
  createCanvas(400, 400);
  tap1 = new Tap(180,170);
  tap2 = new Tap(60,170);
  tap3 = new Tap(300,170);
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
      thoughtBubble(0,40,0,40);
      thoughtBubble(width-40,width,0,40);
      thoughtBubble(0,40,height-40,height);
      thoughtBubble(width-40,width,height-40,height); 
      tap1.display();
      break;

    case (s>=3000 && s<6000):
      thoughtBubble(0,60,0,60);
      thoughtBubble(width-60,width,0,60);
      thoughtBubble(0,60,height-60,height);
      thoughtBubble(width-60,width,height-60,height);
      tap2.display();
      break;
    
    case (s>=6000 && s<8000):
      thoughtBubble(0,80,0,80);
      thoughtBubble(width-80,width,0,80);
      thoughtBubble(0,80,height-80,height);
      thoughtBubble(width-80,width,height-80,height);
      tap3.display();
      break;
      
    case (s>=8000 && s<11000):
      thoughtBubble(0,100,0,100);
      thoughtBubble(width-100,width,0,100);
      thoughtBubble(0,100,height-100,height);
      thoughtBubble(width-100,width,height-100,height);
      tap1.display();
      tap2.display();
      tap3.display();
      break;
      
    case (s>11000 && s<13000):
      thoughtBubble(0,120,0,120);
      thoughtBubble(width-120,width,0,120);
      thoughtBubble(0,120,height-120,height);
      thoughtBubble(width-120,width,height-120,height);
      three(60);
      three(280);
      break;
      
    case (s>13000 && s<16000):
      skip1.display();
      break;
      
    case (s>16000 && s<18000):
      skip1.display();
      skip2.display();
      skip3.display();
      break;
      
    case (s>18000 && s<20000):
      skip1.display();
      skip4.display();
      skip5.display();
      break;
      
    

  }
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

function three(newY) {
  tap1 = new Tap(180,newY);
  tap2 = new Tap(60,newY);
  tap3 = new Tap(300,newY);
  tap1.display();
  tap2.display();
  tap3.display();
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

function thoughtBubble(x_min,x_mx,y_min,y_mx){
  let s = millis();
  let x = random(x_min,x_mx);
  let y = random(y_min,y_mx);
  let diam = random(s/100);
  ellipse(x,y,diam, diam);
}







