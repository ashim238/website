let strWidth;
let eyeSize;
let r;
let g;
let b; 

function setup() {
    let canvas = createCanvas(400, 400);
  canvas.parent ("sketch-container");
  angleMode (DEGREES)
 r = random(50, 255);
 g = random(10, 180);
 b = random(10, 90);

}

function draw(){
  
  let strWidth = mouseX/10;
  let eyeSize = mouseY/225 + mouseX/450
  
  
   
  background(255,209,17);
  textFont("monospace",30);
  textStyle(BOLD);
  cursor(HAND)

  
  
  
//cuphead
  
  //handle
    push();
    fill(216, 216, 216);
    strokeWeight(3)
    rotate(-1)
    ellipse(150,185,60,45)
    pop();
    
    push();
    fill(255,209,17);
    strokeWeight(3)
    rotate(-1)
    ellipse(150,185,42,28)
    pop();
  


  //head
  push()
  fill(216, 216, 216);
  strokeWeight(3);
  arc(225, 150, 150, 175, 0, 180);
  pop()
  
    //rightEyeColorBlock
    push();
    fill(255);
    noStroke();
    rotate(-2);
    arc(259, 161.5, 67, 76.5, 0, 180);
    pop();
  
    push();
    fill(255);
    noStroke();
    rotate(14.5);
    ellipse(324,95.5,10.935,40)
    
    pop();
  
  //rightEye
  push();
  fill(255);
  strokeWeight(1.5);
  rotate(-1.25);
  arc(269, 160, 80, 80, 65, 122.5);
  pop();
    
    //rightpupil
    push();
    fill(0);
    noStroke();
    arc(280, 173, 12+eyeSize, 25+eyeSize, 0, -180/5)
    pop();
    
    
  //leftEye
  push();
  fill(255);
  strokeWeight(1.5);
  rotate(-1.25);
  arc(227, 161.5, 65, 80, 0, 180);
  pop();
  
     //leftpupil
    push();
    fill(0);
    noStroke();
    arc(230, 173, 12+eyeSize, 25+eyeSize, 0, -180/5)
    pop();
  
  
  
  //foreHead
  push();
  strokeWeight(3);
  fill(190, 186, 189);
  arc(225, 150, 150, 12, 0, 360);
  pop();
 
  //foreHead inner
  push();
  strokeWeight(1.5);
  fill(r,g,b);
  arc(225, 150, 125, 5, 0, 360);
  pop();
  
  //straw 
      //color
      //lower triangle
      push();
      strokeWeight(1.5);
      fill(212, 79, 38);
      triangle(175+strWidth, 151.5, 195+strWidth, 151.5, 190+strWidth, 140)
      pop();
  
      //1st circle closest to the bottom (white)
      push();
      strokeWeight(1.5);
      fill(255);
      ellipse(181.5+strWidth, 140, 22); 
      pop();
  
      //2nd circle closest to the bottom (red)
      push();
      strokeWeight(1.5);
      fill(212, 79, 38);
      ellipse(180.5+strWidth, 129.5, 22, 27.5); 
      pop();
  
      //white middle circle (vert) 
      push();
      strokeWeight(1.5);
      fill(255);
      ellipse(180.5+strWidth, 122, 20, 22.5); 
      pop();
  
      //white middle circle (hor) 
      push();
      noStroke();
      fill(255);
      ellipse(183.5+strWidth, 112.5, 19.5, 17); 
      pop();
  
      //white circle horizontal 
      push();
      noStroke();
      fill(255);
      ellipse(165+strWidth, 113.5, 26, 19.5); 
      pop();
  
  
      //red circle horizontal 
      push();
      strokeWeight(1.5);
      fill(212, 79, 38);
      ellipse(158.5+strWidth, 112.5, 22.5, 18.5); 
      pop();
  
      
      //white circle by sip hole 
      push();
      fill(255);
      strokeWeight(1.5)
      ellipse(150+strWidth, 110.5, 10, 18.5)
      pop(); 
  
      
      //dividing line
      push();
      strokeWeight(3);
      noFill();
      line(172.75+strWidth, 119.25, 195+strWidth, 102.5);
      pop();
  
    //left vertical border
    push();
    noFill();
    strokeWeight(3)
    curve(210+strWidth, 150, 175+strWidth, 150, 172.5+strWidth, 120, 210+strWidth, 150)
    pop();  
    
    //bottom bendy
    push();
    noFill();
    strokeWeight(3)
    curve(115+strWidth, 100, 145+strWidth, 120, 171.5+strWidth, 120, 205+strWidth, 100)
    pop();
  
    //sip hole
    push();
    fill(255);
    strokeWeight(3)
    ellipse(145+strWidth, 110, 10, 20)
    pop(); 
     
    //top bendy
    push();
    noFill();
    strokeWeight(3)
    curve(115+strWidth, 67.5, 145+strWidth, 99.75, 195 +strWidth, 102.5, 215 +strWidth, 67.5)
    pop();
    
    //right vertical border
    push();
    noFill();
    strokeWeight(3)
    // line(195, 150, 195, 104)
    curve(245+strWidth, 150, 196.5+strWidth, 151.5, 196.5+strWidth, 102.5, 245+strWidth, 150)
    pop();  
  
  //nose;
  push();
  strokeWeight(1.5);
  fill(r,g,b);
  rotate(-20.5);
  ellipse(180, 275, 15, 10);
  pop();
  
  //mouth
    //color
      //inside mouth
      push()
      fill(0)
      rotate(25.125)
      arc(279.25,94,70.5,50.5,0,180)
      pop()
  
      //tongue left
      push();
      noStroke();
      fill(r,g,b)
      rotate(33.5)
      ellipse(290,74,30.5,9.5)
      pop();
    
      //tongue right
      push();
      noStroke();
      fill(r,g,b)
      rotate(41.75)
      ellipse(307,26.5,19.75,9.75)
      pop();

  
      //teeth
      push();
      noStroke();
      fill(255);
  
      beginShape();
        //control points
      curveVertex(180, 190);
      curveVertex(180, 190);

        //anchor points.
      curveVertex(185, 181.5);
      curveVertex(200.25, 197);
      curveVertex(244.5, 214.25);

        //control points
      curveVertex(245, 220);
      curveVertex(245, 220);

      endShape();
      pop();
  
    //teeth
    push()
    fill(255);
    strokeWeight(1.5)
    curve(182, 105, 180, 187.5, 245, 220, 255, 165)
      //molar line
      line(190, 199, 194, 192);
  
      //canine
      line(206,209, 210, 202);
  
      //incisors
      line(224,217,228,210)    
    pop();

    //crease
    push();
    noFill();
    strokeWeight(1.5);
    curve(130, 270, 172.5, 190, 190, 175, 200, 175)
    pop();
  
    //bottom lip
    push();
    noFill();
    strokeWeight(1.5);
    rotate(27.5);
    arc(282.5, 75.5, 74.5, 66.5, 0, 180);
    pop();
  
    //upper lip
    push();
    noFill();
    strokeWeight(1.5)
    curve(182, 77.5, 182.5, 178, 255, 214.5, 250, 165)
    pop();
  
    //tongue
    push()
    noFill();
    strokeWeight(1.5)
    curve(180, 260, 188, 215, 205, 222.5, 205, 260);
    curve(200, 260, 203, 218, 220, 230, 210, 260);
    pop()
  
  push()
  noStroke();
  fill(50)
  ellipse(215,275,150,6)
  fill(0)
  ellipse(215,275,60,3)
  
  pop()
  
     
let pos = "x: " + (mouseX) + "," + "y: " + (mouseY);
  text(pos,mouseX,mouseY);}
  
function mousePressed() {
 r = random(130, 255);
 g = random(10, 160);
 b = random(10,150);


console.log("test");}


  

 