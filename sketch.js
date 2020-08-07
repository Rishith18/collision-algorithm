var fixedRect, movingRect

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(600,300);
  movingRect.shapeColor = "red";
}

function draw() {
  background(0);  

  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) {

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}