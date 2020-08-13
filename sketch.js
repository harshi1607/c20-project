var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
 wall=createSprite(1300,200,60,canvas.height/2)
 car= createSprite(50, 200, 50, 50);
 wall.shapeColor="black"
 speed=random(55,90)
 weight=random(400,1500)
 car.velocityX=speed
}

function draw() {
  background(255,255,255);  
if(wall.x-car.x<(car.width+wall.width)/2){
  car.collide(wall)
 car.velocityX=0

  var deformation=0.5*weight*speed*speed/25509;
  console.log(deformation)
  if(deformation>180){
    car.shapeColor="pink"
  }
  if(deformation<180 && deformation>100){
    car.shapeColor="blue"
  }
  if(deformation<100){
    car.shapeColor="yellow"
  }
}

  drawSprites();
}