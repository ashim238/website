function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent ("sketch-container");
    angleMode(DEGREES);

  
  }
  
  function draw() {
    
      background( 20, 81, 75);
    
  //  dresser
      push();
      translate(200,200); 
      fill(55, 40, 30);
      rect(-200,12.5,400,50);
  
      
      fill(140, 102, 76,);
      rect(-200,60,400,10);
    
      noFill();
      blendMode(DIFFERENCE)  
      
      //wood pattern // Don't forget to ask about another way to do this.
      strokeCap(SQUARE);
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 15, 200, 15);
    
      stroke(140, 102, 76);
      line(-200, 20, 200, 20);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 22, 200, 22);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 23, 200, 23);
       
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 25, 200, 25);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 30, 200, 30);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 32, 200, 32);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 33, 200, 33);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 33, 200, 33);
    
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 34, 200, 34);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 35, 200, 35);
    
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 50, 200, 50);
    
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 52, 200, 52);
    
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 55, 200, 55);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 56, 200, 56);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 57, 200, 57);
    
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 58, 200, 58);
      
      strokeWeight(1);
      stroke(140, 102, 76);
      line(-200, 60, 200, 60);
      
      //shadow
      blendMode(BLEND);
      fill(0);
      rect (-190,70,380,10);
    
      //upper drawer
      fill(180, 131, 98);
      strokeWeight(1);
      rect (-200,80,400,60);
    
        //woodstripe
        push()
        blendMode(MULTIPLY); 
        strokeCap(SQUARE);
        strokeWeight(1);
        stroke(210, 181, 161);
    
        strokeWeight(1);
        stroke(210, 181, 161);
        line(-200, 80, 200, 80);
        
        line(-200, 81, 200, 81);
      
        line(-200, 85, 200, 95);
    
        line(-200, 95, 200, 95);
    
        line(-200, 96, 200, 96);
  
        line(-200, 98, 200, 98);
        
        line(-200, 99, 200, 99);
        
        line(-200, 100, 200, 100);
    
        line(-200, 101, 200, 101);
    
        line(-200, 102, 200, 102);
        
        line(-200, 110, 200, 110);
        
        line(-200, 115, 200, 115);
    
        line(-200, 116, 200, 115);
    
        line(-200, 117, 200, 115);
        
        line(-200, 118, 200, 115);
    
        line(-200, 119, 200, 115);
    
        line(-200, 120, 200, 115);
    
        line(-200, 125, 200, 130);
          
        line(-200, 125, 200, 125);
        
        line(-200, 140, 200, 140);
    
        pop()
        
        
      //2nd shadow
      blendMode(BLEND);
      fill(0);
      rect (-190,140,380,10);
    
      //lower drawer
      fill(180, 131, 98);
      strokeWeight(1);
      rect (-200,150,400,60);
      
        //woodstripe
        push()
        blendMode(MULTIPLY); 
        strokeCap(SQUARE);
        strokeWeight(1);
        stroke(210, 181, 161);
    
        strokeWeight(1);
        stroke(210, 181, 161);
    
        line(-200, 150, 200, 150);
        
        line(-200, 151, 200, 151);
      
        line(-200, 152, 200, 152);
    
        line(-200, 153, 200, 153);
    
        line(-200, 154, 200, 154);
  
        line(-200, 155, 200, 155);
        
        line(-200, 155, 200, 157);
        
        line(-200, 155, 200, 157);
    
        line(-200, 157, 200, 155);
    
        line(-200, 160, 200, 160);
        
        line(-200, 165, 200, 165);
        
        line(-200, 190, 200, 190);
    
        line(-200, 191, 200, 191);
    
        line(-200, 192, 200, 192);
        
        line(-200, 193, 200, 193);
    
        line(-200, 194, 200, 194);
    
        line(-200, 195, 200, 195);
        pop();
    
      pop();
    
      
      
      
    
  //  left lens (highlight)
      push()
      strokeWeight(4);
      stroke(100,100,100)
      arc(112.5, 185.5, 113, 42.5, 0, 360);
      pop()
  
  //  left lens
      push();
      translate(200,200);
      strokeWeight(4);
      rect(-150, -25, 125, 65, 20, 20, 45, 22.5);
      arc(-87.5, -15.25, 113, 37.5, 0, 360);
    
  //  white block
      noStroke();
      ellipse(-87.25, -11.75, 117, 38.5);
      pop();
    
  //  nose pad (left lens)
      push();
      translate(200,200);
      fill(255);
      ellipse(-38,2,8,24);
      rect(-40,0,3,3);
  
      noFill();
      strokeWeight(1.5);
      curve(-50, 100, -37.5, 0, -26, 2.5, -25, 100);
      pop();
    
  // left arm
      // hinge
      push();
      translate(200,200);
      fill(0);
      rect(-156, -15, 7.5, 15, 5, 0, 0, 5);
      pop();
    
      push();
      translate(200,200);
      noStroke();
      fill(0);
      triangle(-153, 0, -153, -15, -161.5, -7.5);
      pop();
  
      push();
      translate(200,200);
      noFill();
  
      //right arm highlight
      strokeWeight(2);
      stroke(100,100,100);
      curve(-75, 95, -115, 22.5, -148, -9, -200, 15);
  
      //right arm proper
      strokeWeight(3);
      stroke(0)
      curve(-75, 95, -115, 25, -150, -10, -200, 15);
  
      //right arm nub
      rotate(-35)
      stroke(0);
      fill(0);
      rect(-111, -50, 5, 15, 0, 0, 5, 5);
  
      pop();
  
  //  nose bridge
      push();
      translate(200,200);
      noFill();
      strokeWeight(4);
      stroke(0);
      curve(-50, 100, -25, 0, 25, 0, 50, 100);
      pop();
   
  //  right lens (highlight)
      push()
      strokeWeight(4);
      stroke(100,100,100)
      arc(287.5, 185.5, 113, 42.5, 0, 360);
      pop()  
    
  //  right lens
      push();
      translate(200,200);
      strokeWeight(4);
      rect(25, -25, 125, 65, 20, 20, 45, 22.5);
      arc(87.5, -15.25, 113, 37.5, 0, 360);
      pop();
    
  //  white block (right lens)
      push()
      translate(200,200);
      noStroke();
      ellipse(87.25, -11.75, 117, 38.5);
      pop();
  
  //  nose pad (right lens)
      push();
      translate(200,200);
      fill(255);
      ellipse(38,2,8,24);
      rect(37,0,3,3);
  
      noFill();
      strokeWeight(1.5);
      curve(25, 100, 26, 2.5, 37.5, 0, 50, 100);
      pop();
    
  // right arm
      //hinge
      push();
      translate(200,200);
      fill(0);
      rect(150, -15, 7.5, 15, 0, 5, 5, 0);
      pop();
    
      push();
      translate(200,200);
      noStroke();
      fill(0);
      triangle(155, 0, 155, -15, 162.5, -7.5);
      pop();
      
      push();
      translate(200,200);
      noFill();
    
      //right arm highlight
      strokeWeight(2);
      stroke(100,100,100);
      curve(75, 95, 115, 22.5, 148, -9, 200, 15);
    
      //right arm proper
      strokeWeight(3);
      stroke(0)
      curve(75, 95, 115, 25, 150, -10, 200, 15);
    
      //right arm nub
      rotate(35)
      stroke(0);
      fill(0);
      rect(106, -50, 5, 15, 0, 0, 5, 5);
    
      pop();
    
  
  
    
    
      
     
  //     push();
  //     noFill();
  //     beginShape();
  
  //     vertex(149,0);
  //     vertex(149, -15);
  //     vertex(130, 10);
  //     vertex(130, 12.5);
  
  //     endShape(CLOSE);
    
  //     beginShape();
  
  //     vertex(149,0);
  //     vertex(149, -15);
  //     vertex(130, 10);
  //     vertex(130, 12.5);
  
  //     endShape(CLOSE);
      // pop();
    
    
    // //rim using a curve
    //   push();
    //   translate(200,200);
    //   noFill();
    //   strokeWeight(1);
    //   stroke(0);
    //   curve(-165, 150, -145, -15, -30, -16, 50, 160);
    //   pop();
  
  let pos = "x: " + (mouseX-200) + "," + "y: " + (mouseY-200);
    text(pos,mouseX,mouseY);
  }
  