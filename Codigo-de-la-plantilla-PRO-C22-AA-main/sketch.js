const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var score = 0;
var balas = [];
var boats = [];
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angleMode(DEGREES);
  angle = 15;
  cannon = new Cannon(180,110,130,100,angle)

  //bullet = new Bullet(cannon.x,cannon.y)
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
  cannon.display();
  showBoats()
  rect(ground.position.x, ground.position.y, width * 2, 1);


  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

for(var i=0 ; i<balas.length; i=i+1){
  showBalas(balas[i],i);
}
}

function showBalas(ball,index){
  if(ball){
ball.display()
if (ball.body.position.x >= width || ball.body.position.y >= height-50)
ball.remove(index);
  }


}

function keyPressed(){
 if(keyCode == DOWN_ARROW){
  bullet = new Bullet(cannon.x,cannon.y)
  balas.push(bullet)
 }
}

function keyReleased(){
if (keyCode == DOWN_ARROW){
  balas[balas.length - 1].shoot()
}
}

function showBoats(){

if (boats.length > 0){
if (
boats[boats.length-1] === undefined ||
boats[boats.length-1].body.position.x < width - 300
){
var positions = [-20,-40,-60,-70];
var position = random(positions)
var boat = new Boat(width,height - 100,170,170,position)

boats.push(boat);
}

for (var i = 0; i < boats.length; i++){
if (boats[i]){
Matter.Body.setVelocity(boats[i].body,{ x: -0.9,y:0})
boats[i].display();

}
collisionWithBoat(i);
}
}
else{
  var boat = new Boat(width, height - 60,170,170,-60)
  boats.push(boat);
}


}
function collisionWithBoat(index){
  for(var i = 0; i < boats.length; i++){
    if (balas[index] !== undefined && boats[i] !== undefined){
      var collision = Matter.SAT.collides(balas[index].body,boats[i].body);
      if (collision.collided){
        score = score + 5
        boats[i].remove(i);
        balas[index].remove(index)
console.log("collision detectada")
      }
    }
  }
}