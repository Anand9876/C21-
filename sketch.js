var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 50, 50);
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(0); 
  bullet.velocityX=speed;
  if(hascollided(bullet,wall)) 
  {
		bullet.velocityX=0;
		var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
		if(damage>10){
			wall.shapeColor=("green");
		}
		if(damage<10){
			wall.shapeColor=("orange");
		}

  }
  
		
  drawSprites();
}
