let taps = []; //array called taps
let lights = []; //array called lights

function setup() {
  createCanvas(400, 400); //size of sketch
  taps[0] = new Tap(180,170); //first index of taps array is new Tap object
  taps[1] = new Tap(60,170); //second index of taps array is new Tap object
  taps[2] = new Tap(300,170); //third index of taps array is new Tap object
  skip1 = new Skip(180,170); //new Skip object with parameters
  skip2 = new Skip(60,60);
  skip3 = new Skip(300,280);
  skip4 = new Skip(60,280);
  skip5 = new Skip(300,60);
  lightning1 = new Lightning(100,100); //new Lightning object with parameters
  jump1 = new Jump(130,150); //new Jump object
  frameRate(20); // slows down rate 
}

function draw() {
  background(120); //dark gray
  
 let s = millis(); //variable s stores the millisecond values 
  
  switch(true) { //switch checks for which case statement is true and executes that case only
    case (s>=0 && s<3000): // perform this case if time is between 0 and 3 sec
      changingBcgnd(100,130); //function to give random background colors between 100 and 130. these background colors get lighter as time goes by
      quadrants(40); //thought bubbles in all four corners with the limit of x and y being 40
      fill(220,50); //thought bubbles color almost white with opacity, opactiy increases as time goes by
      stroke(0); //black stroke
      taps[0].display(); //displays Tap object in the first index of the taps array
      break; //ends case

    case (s>=3000 && s<6000): //this case if time is between 3 and 6 sec
      changingBcgnd(130,160); 
      quadrants(60);
      fill(220,100);
      stroke(0);
      taps[1].display(); //displays Tap object in the second index of taps array
      break;
    
    case (s>=6000 && s<8000): //time between 6 and 8 sec
      changingBcgnd(160,190);
      quadrants(80);
      fill(220,150);
      stroke(0);
      taps[2].display(); //displays Tap object in the third index of taps array
      break;
      
    case (s>=8000 && s<11000): //time between 8 and 11 sec
      changingBcgnd(190,220);
      quadrants(100);
      fill(220,200);
      stroke(0);
      for (let i=0; i<3;i++){ //displays all three Tap objects
        taps[i].display();
      }
      break;
      
    case (s>=11000 && s<13000): //time between 11 and 13 sec
      changingBcgnd(220,250);
      quadrants(120);
      fill(220,255);
      stroke(0);
      for (let i=0; i<3;i++){ //row of three Tap objects 
        let x = 60 + 120 * i; // initializes x and y position values
        let y = 60;
        taps[i] = new Tap(x,y); // creates new array of objects
        taps[i].display(); //displays this array
      }
      for (let i=0; i<3;i++){ //another row of three Tap objects
        let x = 60 + 120 * i; 
        let y = 280; 			// increases the y value so that this row is below the other row
        taps[i] = new Tap(x,y); //creates new array of objects
        taps[i].display();  //displays this array at specified location based on parameters passed
      }
      break;
      
    case (s>=13000 && s<15000): //time between 13 and 15 sec
      clrLitng(); //function to color the lightning bolts a random color
      for (let i=0; i<20; i++){ //makes 19 lightning bolts in total
        x = random(200) *2; //so that random can take any values within the width and height of sketch
        y = random(200) *2;
        lights[i] = new Lightning(x,y); //makes array of objects and puts in values as it loops
        lights[i].display(); //displays the whole array of Lightning objects
      }
      break;
      
    case (s>=15000 && s<18000): //time between 15 and 18 sec
      clrBcgrnd(200,250,200,250); //changes background of sketch. gets brighter as time goes by
      strokeWeight(1); //back to default stroke weight
      stroke(0); //black stroke
      skip1.display(); //displays skip object number 1
      break;
      
    case (s>=18000 && s<20000): //time between 18 and 20 sec
      clrBcgrnd(150,250,150,250);
      skip1.display(); //displays 3 skip objects, left to right diagonal
      skip2.display();
      skip3.display();
      break;
      
    case (s>=20000 && s<22000): //time between 20 and 22 sec
      clrBcgrnd(10,250,10,250);
      skip1.display(); //displays 3 skip objecys, right to left diagonal
      skip4.display();
      skip5.display();
      break;
      
    case (s>=22000 && s<25000): //time between 22 and 25 sec
      clrBcgrnd(0,250,0,250);
      skip1.display(); //displays all five skip objects
      skip2.display();
      skip3.display();
      skip4.display();
      skip5.display();
      break;
			
	case (s>=25000 && s<28000): //time between 25 and 28 sec
		clrBcgrnd(240,255,0,200); //shades of yellow
		jump1.display(); //displays jump object
		break;
  }
}

function changingBcgnd(light,dark){ //wanted this function for gray colors
  background(random(light,dark)); //random background color between the parameters light and dark
}

class Tap { 
  constructor(x_,y_) { // parameters so that more than one object can be used at once
    this.x = x_;
    this.y = y_;
  }
  
  display(){ //method that displays the object
    line(this.x,this.y,this.x-10,this.y+50);  //left leg
    line(this.x+40,this.y,this.x+50,this.y+50); //right leg
    line(this.x+50,this.y+50,this.x+70,this.y+50); //right foot
    
    let i = second(); // i is a variable for the second function that counts time in sec
    if (i % 2  == 0) {  //if the time in sec is even (therefore just changes every second )
      line(this.x-28, this.y+40, this.x-10, this.y+50); //lift left foot
    } else {
      line(this.x-10, this.y+50, this.x-30, this.y+50); //rest left foot
    }
  }
}

function clrBcgrnd(rclr1, rclr2, bclr1, bclr2){ //this function is for more colorful backgrounds
  background(random(rclr1,rclr2), 255, random(bclr1,bclr2)); //wanted bright greens, blues, and yellow, that is why parameters for the blue is not available
}

class Skip {
  constructor(x_,y_){ //wanted more than one object to be able to be on screen at once
    this.x = x_;
    this.y = y_;
  }
  
  display(){
    
    let i = second(); //second() does not reset and so millis() is used in the switch at the top
    if (i % 2  == 0) { //alternate which leg is above the ground
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


function quadrants(max){ //makes thoughtBubbles at all four corners of screen
  thoughtBubble(0,max,0,max);
  thoughtBubble(width-max,width,0,max);
  thoughtBubble(0,max,height-max,height);
  thoughtBubble(width-max,width,height-max,height);
}

function thoughtBubble(x_min,x_mx,y_min,y_mx){ //function to create thought bubbles 
  let s = millis();
  let x = random(x_min,x_mx); //place bubbles anywhere within this range
  let y = random(y_min,y_mx);
  let diam = random(s/100); //diameter of bubble will be random but grows bigger as time goes by
  noStroke();
  ellipse(x,y,diam, diam); //creates the circles
}

class Lightning {
  constructor(start_x,start_y){ //lets more than one lightning bolt appear on screen
    this.xs = start_x;
    this.ys = start_y;
  }
  
  display(){ //these lines create one lightning bolt and this method is used to display each
    line(this.xs,this.ys,this.xs-20,this.ys+40);
    line(this.xs-20,this.ys+40,this.xs,this.ys+40);
    line(this.xs,this.ys+40,this.xs-20,this.ys+80);
    line(this.xs-20,this.ys+80,this.xs+20,this.ys+30);
    line(this.xs+20,this.ys+30,this.xs,this.ys+30);
    line(this.xs,this.ys+30,this.xs+20,this.ys);
    line(this.xs+20,this.ys,this.xs,this.ys);
  }             
}

function clrLitng(){ //gives random colors to lightning bolts
  let r = random(200,255);
  let g = random(190,255); //light colors against dark background to make them look brighter
  let b = random(205,255);
  strokeWeight(3); //thick strokes
  stroke(r,g,b); //sets stroke color
}

class Jump {
  constructor(x_,y_) {
    this.x = x_;
    this.y = y_;
  }
  
  display(){ //displays one jump object

    line(this.x,this.y,this.x+40,this.y+50); //left arms
    line(this.x+140,this.y,this.x+100,this.y+50); //right arms
  
    let i = second();
    if (i % 2  == 0) { //if time is even, folded legs
      line(this.x+40,this.y+70,this.x+10,this.y+90);
      line(this.x+10,this.y+90,this.x+40,this.y+100);
      line(this.x+100,this.y+70,this.x+130,this.y+90);
      line(this.x+130,this.y+90,this.x+100,this.y+100);
    } else { //stretched legs
      line(this.x+40,this.y+70,this.x,this.y+120);
      line(this.x+100,this.y+70,this.x+140,this.y+120);
    }
  }
}