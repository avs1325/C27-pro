class Bob{
    constructor(x,y,d) {
      var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':500.0
      }
      this.body = Bodies.circle(x,y,d,options);
      this.d = d; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255,255,255);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.d, this.d);
    }
  };