var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(450,200,40,80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;

  movingRect = createSprite(100,100,70,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
}

function draw() {
  background(0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2&&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  
  }
  
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  drawSprites();
}