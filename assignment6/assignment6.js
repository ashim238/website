let i = 0
let j = 0
let comedy = [0, 0, 0, 0, 60, 0, 0]
let totalComedy=0; 
let reality = [75, 22, 120, 0, 0, 0, 53]
let totalReality = 0
let action = [41, 200, 95, 60, 0, 50, 0]
let totalAction = 0
let comedyImg
let realityImg
let actionImg



function preload() {
  comedyImg = loadImage('comedy.jpg');
  realityImg = loadImage('reality.jpeg')
  actionImg = loadImage('action.jpg')
  
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
  
    for (let c = 0; c < comedy.length; c++){
    totalComedy += comedy[c]
  }
    comedyAverage = (totalComedy/comedy.length)
  
    for (let r = 0; r < reality.length; r++){
      totalReality += reality[r]      
    }
  
    realityAverage = (totalReality/reality.length)

    for (let a = 0; a < action.length; a++) {
    totalAction += action[a]  
      
    }
   actionAverage = (totalAction/action.length)
  
}

function draw() {
  background(255,209,17);
  
  tvFrame();  
 
  
 

  
  
  
  let pos = "x: " + (mouseX) + "," + "y: " + (mouseY);
  text(pos,mouseX,mouseY);
  
}

function tvFrame() {
 strokeWeight(3)
  let sc = second();
  let totalAv = comedyAverage+realityAverage+actionAverage
  let cMap = Math.round(60 * (comedyAverage/totalAv))
  let rMap = Math.round(60 * (realityAverage/totalAv))
  let aMap = Math.round(60 * (actionAverage/totalAv))
 

  //combo border
  push()
  fill(75,75,75);
  rect(((width/2)+i-190.625-12.5),((height/2)+j-125-12.5), 406.25, 275, 3.125);
  pop()

  //dial center
  push();
  fill((90,90,90))
  rect(((width/2)+i+59.375),((height/2)+j-125), 125, 250, 6.25);
  pop();
  
  //dial right
  push()
  fill((180,180,180))
  rect(((width/2)+i+68.75),((height/2)+j-125), 125, 250, 6.25);
  pop()
  
  //screen
  push()
  fill((45,45,45))
  rect(((width/2)+i-190.625),((height/2)+j-125), 250, 250, 6.25);
  pop()
  
  //screen inner
  push()
  fill(0);
  rect(((width/2)+i-190.625+25),((height/2)+j-100), 200, 200, 6.25);
  pop()
  

  //antenna 
    //left 
    push();
    fill((180,180,180));
    triangle (255+i, 160+j, 270+i, 160+j, 165+i, 85+j);
    ellipse (165+i, 85+j, 10);
    pop();
  
    //right
    //top
    push();
    fill ((180,180,180));
    triangle (340.5+i, 122.5+j, 345, 122.5+j, 350+i, 90+j)
    ellipse (350+i, 90+j, 10)
    pop();

    //bottom
    push();
    fill((180,180,180));
    quad(340+i, 160+j, 350+i, 160+j, 375+i, 120+j, 370+i,120+j);
  
    //middle
    quad(370+i, 122.5+j, 370+i, 117.5+j, 340+i, 120+j, 340+i, 125+j);
    pop();

    push()
    fill((180,180,180));
    ellipse(372.5+i, 120+j, 10)
    pop();
    
    //mask
    push();
    strokeWeight(2);
    stroke((180,180,180));
    line(370+i, 120+j, 360+i, 121+j)
    pop();
  
   
    
// Comedy show timing
if (sc >= 0 && sc < cMap) {
  image(comedyImg, 135, 200, 200, 200);
}

// Reality show timing
if (sc >= cMap && sc < (cMap + rMap)) {
  image(realityImg, 135, 200, 200, 200);
}

// Action show timing
if (sc >= (cMap + rMap) && sc < 60) {
  image(actionImg, 135, 200, 200, 200);
}
  
   
  console.log('cMap: ' + cMap)
  
  console.log('rMap: ' + rMap)
  
  console.log('aMap: ' + aMap)
    
  console.log(sc)
    

  

  
  
}



    