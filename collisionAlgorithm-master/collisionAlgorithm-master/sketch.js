var fixedRect, movingRect;
var b1,b2,b3,b4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  b1 = createSprite(100, 100, 50, 50);
  b2 = createSprite(200, 100, 50, 50)
  b3 = createSprite(300, 100, 50, 50)
  b4 = createSprite(700, 100, 50, 50)
  b1.shapeColor="green"
  b2.shapeColor="green"
  b3.shapeColor="green"
  b4.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(co1(movingRect,b1)){
  movingRect.shapeColor = "red";
  b1.shapeColor = "red";

  
}
 
else{
  movingRect.shapeColor = "green";
  b1.shapeColor = "green";
}
  drawSprites();
}
function co1(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
     {
 return true
}
else {
 return false
}
}
