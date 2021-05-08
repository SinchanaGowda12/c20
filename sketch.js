var fixedrect;
var movingrect;



function setup() {
  createCanvas(800,400);
  fixedrect= createSprite(200, 200, 20, 80);

  movingrect= createSprite(400,200,80,20);

  fixedrect.shapeColor ="green";
  movingrect .shapeColor ="red";
}

function draw() {
  background("black");  

movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

  drawSprites();
}