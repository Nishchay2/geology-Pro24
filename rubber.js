class rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':0.4
      }
      
      this.body=Matter.Bodies.circle(x,y,20,options)
      this.radius=40
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill("blue");
      rect(0, 0,this.radius);
      pop();
    }
  };