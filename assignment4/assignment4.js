function setup() {
    angleMode(DEGREES);
    let canvas = createCanvas(400, 600);
    canvas.parent("sketch-container");
  }
  
  function draw() {
    background(220);
  
    dodoMeat(400);
    
    pirate();
    
    carcass(350);
  
   
    
  
  
  function pirate() {
    
    //hat
    //center
    rect(width/2-75, height/5-62.5, 150, 125, 100);
    
    //left rim
    rect(75,125,width/2-67.5, 57.5);
    
      //mask
      push();
      fill(220)
      noStroke();
      ellipse(100, 112.5, 49.5, 100);
      pop();
      
      //stroke
      push();
      noFill();
      arc(100, 117.5, 50, 87, 0, 180);
      pop();
    
  
    //right rim
      push();
      rect(192.5,125,width/2-67.5, 57.5)
      pop();
    
      //mask
      push();
      fill(220)
      noStroke();
      ellipse(300, 112.5, 49.5, 100);
      pop();
      
     //stroke
      push();
      noFill();
      arc(300, 117.5, 50, 87, 0, 180);
      pop();
  
    //center mask
      push();
      noStroke();
      rect(width/2-74.5, height/5-58, 149, 120, 100)
      pop();
    
  //neck
  rect(width/2-7.5, 250, 15, 30, 10)
    
    
  //head
  arc(width/2, 182.5, 75, 150, 0, 180);
  
  //mouth
    arc (width/2, 230, 15, 30, 0, 180); 
    
  //nose
    //right nos
    rect(width/2, 220, 15, 15, 5);
    
    //left nos
    rect(width/2-15, 220, 15, 15, 5);
  
    //bridge
    ellipse (width/2, 221.25, 15, 30);
    
    
  //eyes
    //left
    ellipse (width/2-17.5, 205, 15, 20);
    
    //right
    ellipse (width/2+17.5, 205, 15, 20);
  
  
    
    
  }  
  
  function carcass(y) {
    //torso()
    //big
    ellipse(width/2, y, 100, 175);
    
    //small
    ellipse(width/2, y+12.5, 75, 125);
    
    //fork
    push();
    strokeWeight(2);
    noFill();
    curve(50, y, 230, y, 230, y+25, 50, y+25);
    line(230, y+12.5, 300, y+12.5)
    pop();
  
    
  }
    
  function dodoMeat(y) {
    //dodo
    //left leg
    triangle(160, y, 160, y+100, 175, y)
    
    line(160, y+100, 160, y+120)
    
    //toes
    line(160, y+120, 130, y+125)
    line(160, y+120, 190, y+125)
    line(160, y+120, 160, y+125)
    
    
    //right leg
    triangle(240, y, 240, y+100, 225, y)
    
    line(240, y+100, 240, y+120)
    
    //toes
    line(240, y+120, 210, y+125)
    line(240, y+120, 270, y+125)
    line(240, y+120, 240, y+125)
  
    
  }
  
    
    
    let pos = "x: " + (mouseX) + "," + "y: " + (mouseY);
    text(pos,mouseX,mouseY);
  }