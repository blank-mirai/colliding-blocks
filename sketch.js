var moving, static;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 300, 50, 30);
  moving.shapeColor = "blue";
  moving.velocityY = -5;
  static = createSprite(400, 100, 30, 50);
  static.shapeColor = "blue";
  static.velocityY = 5;
}

function draw() {
  background(0,0,0);  

  /*moving.x = mouseX;
  moving.y = mouseY;*/

  console.log(moving.y - static.y);

  if(moving.x - static.x < moving.width/2 + static.width/2
    && static.x - moving.x < moving.width/2 + static.width/2
    && moving.y - static.y < moving.height/2 + static.height/2
    && static.y - moving.y < moving.height/2 + static.height/2){
      moving.shapeColor = "red";
      static.shapeColor = "red";
    }
    else{
      moving.shapeColor = "blue";
      static.shapeColor = "blue";
    }

    if(moving.x - static.x < moving.width/2 + static.width/2
      && static.x - moving.x < moving.width/2 + static.width/2){
        moving.velocityX = moving.velocityX * (-1);
        static.velocityX = static.velocityX * (-1);
      }

    if(moving.y - static.y < moving.height/2 + static.height/2
      && static.y - moving.y < moving.height/2 + static.height/2){
        moving.velocityY = moving.velocityY * (-1);
        static.velocityY = static.velocityY * (-1);
      }
  drawSprites();
}