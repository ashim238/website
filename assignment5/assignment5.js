function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("sketch-container");
  }
  
  function draw() {
    background(0);
    
    for (let x=0; x < width; x+=60){
       for (let y=0; y < height; y+=60){
         noStroke();
         ellipse(x, y, width/x-mouseX/60, height/y-mouseY/60);
         ellipse (600-x, 600-y, width/x-mouseX/60, height/y/-mouseY/60);
         
          push();
          fill(0)
           noStroke();
           ellipse(x, y, width/x-mouseX/120, height/y-mouseY/120);
           ellipse (600-x, 600-y, width/x-mouseX/120, height/y-mouseY/120);
         pop();
         
         push();
         fill(255)
           noStroke();
           ellipse(x, y, width/x-mouseX/240, height/y-mouseY/240);
           ellipse (600-x, 600-y, width/x-mouseX/240, height/y-mouseY/240);
         pop();
         
         
    }
    }
    
   
    
    // push();
    //   fill(0)
    //   for (let x=0; x < width; x+=60){
    //    for (let y=0; y < height; y+=60){
    //      noStroke();
    //      ellipse(x, y, width/x-mouseX/120, height/y-mouseY/120);
    //      ellipse (600-x, 600-y, width/x-mouseY/120, height/y/-mouseY/120);
    // }
    // }
    // pop();
    
  
  }