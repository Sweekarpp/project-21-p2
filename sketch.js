var wall,bullet;

var speed,weight,damage,thickness;

function setup() {
createCanvas(1600,400);
speed = random(30,128);
weight = random(30,52);
thickness = random(22,83)
damage = 0.5 * weight * speed * speed / thickness*thickness*thickness;
wall = createSprite(width-20, 200, thickness, height/2);
bullet = createSprite(0,200,5,5);
bullet.velocityX = speed;

}

function draw() {
background(0,0,0);
bullet.collide(wall);
if(damage < 10){
        bullet.shapeColor = "green";    
    }else if(damage > 10){
        bullet.shapeColor = "red";    
    }
drawSprites();
}