const DEBUG = false;

let brickImg;
let foodImg;
let powerupImg;
let pacmanGif;
let broomGif;
let moneyGif;
let forkGif;
let readGif;
let pacmanPoweredGif;

let pacman;
let broom;
let money;
let fork;
let read;

let brick;
let platform;
let bricks = [];
let foods = [];
let powerups = [];
let stressors = [];
let activeStressors = [];
let isPlaying = false;
let isGameOver = false;

function preload(){
    brickImg = loadImage('brick.gif');
    foodImg = loadImage('burger.png');
    powerupImg = loadImage('powerup.png');
    pacmanGif = loadImage('pacman.gif');
    broomGif = loadImage('broom.gif');
    moneyGif = loadImage('money.gif');
    forkGif = loadImage('fork.gif');
    readGif = loadImage('read.gif');
    pacmanPoweredGif = loadImage('pacman-powered.gif');
}

class Brick {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.radius = 5;
  }

  show(){
    image(brickImg, this.x, this.y, this.w, this.h);
  }
}

class Food {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.radius = 5;
  }
  
  show(){
    image(foodImg, this.x, this.y, this.w, this.h);
  }
}

class Powerup {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.radius = 5;
  }

  show(){
    image(powerupImg, this.x, this.y, this.w, this.h);
  }
}

class Pacman {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y; 
    this.w = w;
    this.h = h;
    this.direction = 0;
    this.radius = 15;
    this.isPoweredUp = false;
    this.powerupTimer = 0;
    this.powerupDuration = 75;
    this.originalSize = { w: w, h: h };
  }
  
  show(){
    if (this.isPoweredUp) {
      image(pacmanPoweredGif, this.x, this.y, this.w, this.h);
      
      fill(255);
      textSize(12);
      textAlign(CENTER);
      text(floor(this.powerupTimer/60), this.x + this.w/2, this.y - 5);
    } else {
      image(pacmanGif, this.x, this.y, this.w, this.h);
    }
  }
  
  move(d) {
    const moves = [
      { x: 1, y: 0 },  //right
      { x: 0, y: 1 },  //down
      { x: -1, y: 0 }, //left
      { x: 0, y: -1 }  //up
    ];
    this.direction = d;
    this.x += moves[d].x * platform.cellSize;
    this.y += moves[d].y * platform.cellSize;

    if (this.x < 0){
      this.x = width - platform.cellSize;
    }
    if (this.x >= width){ 
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height - platform.cellSize;
    }
    if (this.y >= height) {
      this.y = 0;
    }
  }
  
  eat(food) {
    const dx = this.x - food.x;
    const dy = this.y - food.y;
    const squareDistance = dx * dx + dy * dy;
    const squareRadiusSum = (this.radius + food.radius) * (this.radius + food.radius);
    return squareDistance < squareRadiusSum;
  }

  collide(enemy) {
    let distance = dist(
      this.x + this.w/2,  
      this.y + this.h/2,  
      enemy.x + enemy.w/2,
      enemy.y + enemy.h/2
    );
    return distance < (this.radius + enemy.radius);
  }

  collectPowerup(powerup) {
    const dx = this.x - powerup.x;
    const dy = this.y - powerup.y;
    const squareDistance = dx * dx + dy * dy;
    const squareRadiusSum = (this.radius + powerup.radius) * (this.radius + powerup.radius);
    return squareDistance < squareRadiusSum;
  }
}

class Stress {
  constructor(x, y, w, h, img){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.direction = 0;
    this.radius = 15;
    this.isScared = false;
    this.originalImg = img;
    this.startX = x;  
    this.startY = y;
    this.isResetting = false;
  }
  
  show(){
    if (this.isResetting) {
      //Show blue when reset
      tint(0, 0, 255, 128);
      image(this.img, this.x, this.y, this.w, this.h);
      noTint();
    } else {
      //Normal display
      if (pacman.isPoweredUp) {
        tint(0, 0, 255);
        image(this.img, this.x, this.y, this.w, this.h);
        noTint();
      } else {
        image(this.img, this.x, this.y, this.w, this.h);
      }
    }
  }
  
  move(bricks, attempts = 0) {
    //Don't move if too many attempts
    if (this.isResetting || attempts > 3) return;
    
    let lastx = this.x;
    let lasty = this.y;
    
    if (this.isChaser && !pacman.isPoweredUp) {
      //Distance to Pacman
      let dx = pacman.x - this.x;
      let dy = pacman.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      // Chase behavior - now always active for the broom
      let moveDirection;
      if (Math.abs(dx) > Math.abs(dy)) {
        moveDirection = dx > 0 ? 0 : 2;  //right or left
      } else {
        moveDirection = dy > 0 ? 1 : 3;  //down or up
      }
      
      const moves = [
        { x: 1, y: 0 },  //right
        { x: 0, y: 1 },  //down
        { x: -1, y: 0 }, //left
        { x: 0, y: -1 }  //up
      ];
      
      //Move faster when closer to Pacman
      let speedMultiplier = 1;
      if (distance < 300) {// Increase speed when within 150 pixels
        speedMultiplier = 2;
      }
      
      this.direction = moveDirection;
      this.x += moves[moveDirection].x * platform.cellSize * speedMultiplier;
      this.y += moves[moveDirection].y * platform.cellSize * speedMultiplier;
    } else {
      //Random movement for the randos
      let d = floor(random(4));
      
      this.direction = d;
      const moves = [
        { x: 1, y: 0 },  //right
        { x: 0, y: 1 },  //down
        { x: -1, y: 0 }, //left
        { x: 0, y: -1 }  //up
      ];
      
      this.x += moves[d].x * platform.cellSize;
      this.y += moves[d].y * platform.cellSize;
    }

    //collisions 
    for (let i = 0; i < bricks.length; i++){   
      if (this.collide(bricks[i])){
        //go back to previous position
        this.x = lastx;
        this.y = lasty;
        this.move(bricks, attempts + 1);
        return;
      }
    }
    
    if (this.x < 0){
      this.x = width - platform.cellSize;
    }
    if (this.x >= width){ 
      this.x = 0;
    }
  }

  leave(platform) {
    let row = floor(this.y / platform.cellSize);
    let col = floor(this.x / platform.cellSize);
    
    let moveAmount = 0;
    for (let i = 1; row - i >= 0; i++) {
      if (platform.structure[row - i][col] === 'd') {
        moveAmount = i;
      }
    }
    
    if (moveAmount > 0) {
      this.y -= platform.cellSize * moveAmount;
    }
  }

  collide(brick) {
    let distance = dist(
      this.x + this.w/2,
      this.y + this.h/2,
      brick.x + brick.w/2,
      brick.y + brick.h/2
    );
    return distance < (this.radius + brick.radius);
  }

  reset() {
    this.isResetting = true;
    //Don't teleport to center, just set the flag
  }

  moveToStart() {
    //Move in straight lines back to start
    if (this.x < this.startX) this.x += platform.cellSize;
    if (this.x > this.startX) this.x -= platform.cellSize;
    if (this.y < this.startY) this.y += platform.cellSize;
    if (this.y > this.startY) this.y -= platform.cellSize;
    
    //Check if we've reached the start
    if (this.x === this.startX && this.y === this.startY) {
      this.isResetting = false;
      this.direction = 0;  //Reset
      return true;
    }
    return false;
  }
}

class Platform {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = 30;
    this.structure = [
      ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '-', '-', '*', '*', '*', '-', '*', '*', '*', '-', '-', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
      ['*', 'p', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*'],
      ['*', '-', '*', '*', '*', '*', '*', '*', '*', '-', '*', '*', '*', '*', '*', '*', '-', '*', '*', '*', '*', '*', '*', '-', '*', '*', '*', '*', '*', '*'],
      ['*', '-', '*', '-', '-', '-', '-', '-', '*', '-', '*', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '*'],
      ['*', '-', '*', '-', '*', '*', '-', '-', '*', '-', '*', '-', '*', '*', '*', '-', '*', '-', '*', '*', '*', '-', '*', '-', '*', '*', '-', '-', '-', '*'],
      ['*', '-', '*', '-', '*', '*', '-', '-', '*', '-', '*', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '*'],
      ['*', '-', '*', 'o', '-', '-', '-', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', 'o', '*'],
      ['*', '-', '*', '*', '*', '*', '-', '-', '*', '-', '*', '*', '*', '*', 'd', 'd', 'd', '*', '*', '*', '*', '-', '*', '-', '-', '*', '*', '*', '*', '*'],
      ['*', '-', '-', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '*', '*', '*', '*', '*', '-', '-', '-', '-', '-', '-', '-', '-', '*', '/', '/', '*'],
      ['*', '*', '*', '*', '*', '*', '-', '*', '*', '*', '*', '*', '*', '*', 'b', '/', 'r', '*', '*', '*', '*', '*', '*', '*', '-', '*', '*', '*', '*', '*'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*', '/', '/', '/', '*', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['*', '*', '*', '*', '*', '*', '-', '*', '*', '*', '*', '*', '*', '*', 'm', '/', 'f', '*', '*', '*', '*', '*', '*', '*', '-', '*', '*', '*', '*', '*'],
      ['*', '-', '-', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '*', '*', '*', '*', '*', '-', '-', '-', '-', '-', '-', '-', '-', '*', '/', '/', '*'],
      ['*', '-', '*', '*', '*', '*', '-', '-', '*', '-', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '-', '*', '-', '-', '*', '*', '*', '*', '*'],
      ['*', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*'],
      ['*', '-', '*', '-', '*', '*', '-', '-', '*', '-', '*', '-', '*', '*', '*', '-', '*', '-', '*', '*', '*', '-', '*', '-', '*', '*', '-', '-', '-', '*'],
      ['*', '-', '*', '-', '*', '*', '-', '-', '*', '-', '*', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '*'],
      ['*', '-', '*', 'o', '-', '-', '-', '-', '*', '-', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '-', '*', '-', '-', '-', '-', '-', 'o', '*'],
      ['*', '-', '*', '*', '*', '*', '*', '*', '*', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '*'],
      ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '-', '-', '*', '*', '*', '-', '*', '*', '*', '-', '-', '*', '*', '*', '*', '*', '*', '*', '*', '*']
    ];
  }
}

function setup() {
 let canvas = createCanvas(900, 600);
 canvas.parent('sketch-container');
  frameRate(5);
  platform = new Platform(20, 30);
  
  //Prevent arrow keys from scrolling the page
  window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);
  
  for (let i = 0; i < platform.rows; i++) {
    for (let j = 0; j < platform.cols; j++) {
      const cellSize = platform.cellSize;
      if (platform.structure[i][j] === '*') {
        bricks.push(new Brick(j * cellSize, i * cellSize, cellSize, cellSize));
      }
      if (platform.structure[i][j] === '-') {
        foods.push(new Food(j * cellSize, i * cellSize, cellSize, cellSize));
      }
      if (platform.structure[i][j] === 'o') {
        powerups.push(new Powerup(j * cellSize, i * cellSize, cellSize, cellSize));
      }
      if (platform.structure[i][j] === 'p') {
        pacman = new Pacman(j * cellSize, i * cellSize, cellSize, cellSize);
      }
      if (platform.structure[i][j] === 'b') {
        stressors.push(new Stress(j * cellSize, i * cellSize, cellSize, cellSize, broomGif));
      }
      if (platform.structure[i][j] === 'm') {
        stressors.push(new Stress(j * cellSize, i * cellSize, cellSize, cellSize, moneyGif));
      }
      if (platform.structure[i][j] === 'f') {
        stressors.push(new Stress(j * cellSize, i * cellSize, cellSize, cellSize, forkGif));
      }
      if (platform.structure[i][j] === 'r') {
        stressors.push(new Stress(j * cellSize, i * cellSize, cellSize, cellSize, readGif));
      }
    }
  }
  stressorsLeave();
  
  // Make the first stressor (broom) the chaser
  if (stressors.length > 0) {
    stressors[0].isChaser = true;
  }
}

function draw() {
  background(0);
  if (!platform || !pacman) return;
  
  if (!isPlaying) {
    fill(255);
    textAlign(CENTER);
    text('PRESS SPACE TO START', width/2, height/2);
    return;
  }
  
  if (isGameOver) {
    fill(255);
    textAlign(CENTER);
    text('GAME OVER', width/2, height/2);
    text('PRESS SPACE TO START OVER', width/2, height/2 + 30);
    return;
  }
  
  if (pacman.isPoweredUp) {
    let pulseColor = map(sin(frameCount * 0.1), -1, 1, 0, 50);
    background(pulseColor, 0, 0);
  }
  
  for (let i = 0; i < bricks.length; i++){
    bricks[i].show();
  }
  
  for (let i = 0; i < foods.length; i++){
    foods[i].show();
  }
  
  for (let i = 0; i < powerups.length; i++){
    powerups[i].show();
  }

  for (let i = 0; i < activeStressors.length; i++){
    if (activeStressors[i].isResetting) {
      activeStressors[i].moveToStart();
    } else {
      activeStressors[i].move(bricks);
    }
    activeStressors[i].show();
  }
  
  pacman.show();

  for (let i = 0; i < foods.length; i++){
    if (pacman.eat(foods[i])){
      foods.splice(i, 1);
    }
  }

  for (let i = powerups.length - 1; i >= 0; i--) {
    if (pacman.collectPowerup(powerups[i])) {
      pacman.isPoweredUp = true;
      pacman.powerupTimer = pacman.powerupDuration;
      powerups.splice(i, 1);
    }
  }

  if (pacman.isPoweredUp) {
    pacman.powerupTimer--;
    if (DEBUG) {
      console.log("Powerup time remaining:", pacman.powerupTimer);
    }
    if (pacman.powerupTimer <= 0) {
      pacman.isPoweredUp = false;
    }
  }
}

function stressorsLeave() {
  if (stressors && stressors.length > 0) {
    let b = stressors.pop();
    if (b && platform) {
      b.leave(platform);
      activeStressors.push(b);
    }
  }
  setTimeout(stressorsLeave, 2000);
}

function keyPressed(){
  if (!isPlaying && keyCode === 32) {  //spacebar
    isPlaying = true;
    return;
  }
  
  if (isGameOver && keyCode === 32) {
    isPlaying = false;
    isGameOver = false;
    window.location.reload();  //Simple reset
    return;
  }
  
  if (!isPlaying) return;
  
  let row = floor(pacman.y/platform.cellSize);
  let col = floor(pacman.x/platform.cellSize);
  console.log('Pacman x:', floor(pacman.x), 'y:', floor(pacman.y));
  
  if (keyCode === RIGHT_ARROW) {
    //Check if valid
    if (col + 1 < platform.cols && platform.structure[row][col + 1] !== '*' || col + 1 === platform.cols) {
      console.log('right');
      pacman.move(0);
    }
  } else if (keyCode === DOWN_ARROW) {
    if (row + 1 < platform.rows && platform.structure[row + 1][col] !== '*' || row + 1 === platform.rows) {
      console.log('down');
      pacman.move(1);
    }
  } else if (keyCode === LEFT_ARROW) {
    if (col - 1 >= 0 && platform.structure[row][col - 1] !== '*' || col - 1 < 0) {
      console.log('left');
      pacman.move(2);
    }
  } else if (keyCode === UP_ARROW) {
    if (row - 1 >= 0 && platform.structure[row - 1][col] !== '*' || row - 1 < 0) {
      console.log('up');
      pacman.move(3);
    }
  }
  
  for (let i = activeStressors.length - 1; i >= 0; i--){
    if (pacman.collide(activeStressors[i])){
      if (!pacman.isPoweredUp) {
        isGameOver = true;
      } else if (!activeStressors[i].isResetting) {
        activeStressors[i].reset();
      }
    }
  }
}
