const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pivot1, arm1, bob1;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  pivot1 = new Pivot(400, 50, 500, 100);
  bob1 = new Bob(400, 500, 50);
  arm1 = new Arm(pivot1.body, bob1.body);
  
}

function draw() {
  background(255,0,255);
  text("You can drag and release the pendulum with the mouse.", 400, 400);  
  Engine.update(engine);

  pivot1.display();
  bob1.display();
  arm1.display();

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}