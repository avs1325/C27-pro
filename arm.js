class Arm{
    constructor(endA, endB){
         var options = {
             bodyA: endA,
             bodyB: endB,
             stiffness : 0.5,
             lenght:100
         }         
         
         this.body = Constraint.create(options);
         World.add(world,this.body);
         

    }

    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}