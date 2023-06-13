class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon = loadImage("assets/canon.png")
    this.cannon_b = loadImage("assets/cannonBase.png")
  }
  display(){
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.cannon,0,0,this.width,this.height)
    pop()

    push()
    image(this.cannon_b,70,20,200,200)
    pop()

    if (keyIsDown(LEFT_ARROW) && this.angle >= -110){
      this.angle -=1
    }
  
    if (keyIsDown(RIGHT_ARROW) && this.angle <= 70){
      this.angle += 1
    }
  }

} 
