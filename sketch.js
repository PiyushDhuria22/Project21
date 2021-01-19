var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 150, 50);
  bullet.shapeColor=color("white")
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  speed=random(55,90);
  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  weight=random(400,1500);
}

function draw() {
  bullet.velocityX=speed;
  background("black"); 
  if(hasCollided(bullet,wall)){
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor=color("green");
  }
  if(damage<10){
    wall.shapeColor=color("red");
  }
}
drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}