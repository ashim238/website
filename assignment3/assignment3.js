let timer = 1000;
let passedTime;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent ("sketch-container");
  angleMode(DEGREES)

}

function draw() {
background(222)
translate(width/2, height/2);
rotate(-90);



let hr = hour();
let min = minute();
let sc = second();
let meek = millis();
  
strokeWeight(8);
noFill();
  
stroke (250, 150, 250);
let started = map(meek, 0, 1000, 0, 360);
arc (0, 0, 500, 500, 0, started);
  
stroke (250, 100, 150);
let ended = map (sc, 0, 60, 0, 360);
arc(0, 0, 300, 300, 0, ended);

stroke (150, 100, 150);
let ended2 = map (min, 0, 60, 0, 360);
arc(0, 0, 280, 280, 0, ended2);

stroke (150, 100, 250);
let ended3 = map (hr % 12, 0, 12, -90, 360);
arc(0, 0, 260, 260, 0, ended3);
  

  
  
//sechand
push();
rotate(ended)
stroke (250, 100, 150);
arc(0, 0, 100, 100, 0, ended);
pop();

//minhand
push();
rotate(ended2)
stroke (150, 100, 150);
arc(0, 0, 200, 200, 0, ended2);
pop();

//hrhand
push();
rotate(ended3)
stroke (150, 100, 250);
line(0, 0, 50, 0);
arc(0 ,0, 400, 400, 0, ended3)
pop(); 

  
//fun lil if else statement
if (mouseX || mouseY > 150){

stroke (250, 150, 250);
arc(0, 0, 10, 10, 0, started)
  
}

else {
stroke (50, 150, 250);
arc (0, 0, 10, 10, 0, started)
  
}
  
  
// sharinganTest
// rotate(ended)
// ellipse(50, 50, 20, 20);

// fill (0)
// noStroke();
// text(hr + ":" + min + ":" + sc, 100,100);
  


 

// push();
// rotate(90);
// strokeWeight(1);
// let pos = "x: " + (mouseX) + "," + "y: " + (mouseY);
//   text(pos,mouseX,mouseY);
// pop();

}
  