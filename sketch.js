const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    
    restitution: 0.3,
    density:1.2,
    friction:0,
    isStatic:false,

  }
   
   var ground_options ={
     isStatic: true
   };
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
}

shoot(){

  var velocity = p5.Vector.fromAngle(ball.angle);
  velocity.mult(20);
  Matter.Body.setStatic(this.body,false)
  Matter.Body.setVelocity(this.body,{x:velocity.x,y:-velocity.y})
}