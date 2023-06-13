class Boat {
    constructor(x,y,width,heigth,boatPos){
      this.body = Bodies.rectangle(x,y,width,heigth)
      this.width = width;
      this.heigth = heigth;
      this.image = loadImage("./assets/boat.png");
      this.boatPosition = boatPos;
      World.add(world,this.body)
    }

    remove(index){
      Matter.Body.setVelocity(this.body,{x:0,y:0});

      Matter.World.remove(world,this.body);
      delete boats[index]
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.width,this.heigth);
        pop();
    }



}