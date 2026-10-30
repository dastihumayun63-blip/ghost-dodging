let ghost;
let player;
let touchCount = 0;
let cooldown = 0; 
let ghostspeed = 2;

function setup() {
  createCanvas(480, 360);
  ghost = { x: 240, y: 100, vx: 2, vy: 1.5 };
  player = { x: 240, y: 180 };
}

function draw() {
  background(15, 10, 25);
  moon();

  ghost.x += ghost.vx;
  ghost.y += ghost.vy;
  

  if (ghost.x < 30 || ghost.x > width - 30) {
    ghost.vx *= -1.2;
    ghost.vy = random(3,-3)
  }
  if (ghost.y < 30 || ghost.y > height - 30) {
    ghost.vy *= -1.2;
    ghost.vy = random(-3,3)
  }

  drawGhost(ghost.x, ghost.y);
  
  player.x = mouseX;
  player.y = mouseY;
  drawPlayer(player.x, player.y);

  if (cooldown > 0) cooldown--;
  
  let d = dist(player.x, player.y, ghost.x, ghost.y);
  if (d < 60 && cooldown === 0) {
    touchCount++;
    cooldown = 45; 
  }

  fill(255);
  textSize(16);
  text("Touches: " + touchCount, 20, 30);

  if (touchCount >= 3) {
    fill(255, 50, 50);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    noLoop(); 
  }
}

function moon() {
  fill(128, 128, 128);
  ellipse(10, 20, 150, 150);
}

function drawGhost(x, y) {
  noStroke();
  fill(200, 220, 200);
  ellipse(x, y, 60, 60);
  fill(20);
  ellipse(x - 10, y - 8, 10);
  ellipse(x + 10, y - 5, 10);
}

function drawPlayer(x, y) {
  noStroke();
  fill(100, 200, 250);
  ellipse(x, y, 60, 60);
  fill(20);
  ellipse(x - 10, y - 8, 10);
  ellipse(x + 10, y - 5, 10);
}