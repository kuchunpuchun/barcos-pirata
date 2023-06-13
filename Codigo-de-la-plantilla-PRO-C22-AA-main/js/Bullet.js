class Bullet {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      var options = {
        isStatic : true
      }
      this.r = 10.000927381932614763891476745381926
      this.body = Bodies.circle(x,y,this.r,options)
      World.add(world,this.body)
    }

remove(index){
Matter.Body.setVelocity(this.body,{x:0,y:0});

Matter.World.remove(world,this.body);
delete balas[index]
}

shoot(){
  var newAngle = cannon.angle - 28
  newAngle = newAngle*(3.14/180)
  var velocity = p5.Vector.fromAngle(newAngle);
  velocity.mult(0.5);
  Matter.Body.setStatic(this.body,false);
  Matter.Body.setVelocity(this.body,{x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
}

    display(){
        push()
        fill("#3C3C50")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
        pop()
    }
}