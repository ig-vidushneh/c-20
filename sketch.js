var fixedrect,movingrect
function setup() {
  createCanvas(windowWidth,windowHeight);
  movingrect=createSprite(800, 200, 80, 20);
  fixedrect=createSprite(400,200,50,50);
  movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow"
}

function draw() {
  background(0); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if (fixedrect.x - movingrect.x < (fixedrect.width + movingrect.width)/2 &&
  movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width /2 &&
  fixedrect.y - movingrect.y < (fixedrect.height + movingrect.height)/2 &&
  movingrect.y- fixedrect.y < fixedrect.height/2 + movingrect.height /2 ) 
  {
    fixedrect.shapeColor="blue"
    movingrect.shapeColor="blue"
  }
  else
  {
    fixedrect.shapeColor="white"
    movingrect.shapeColor="white"
  }
  drawSprites();
}