const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;



var myengine , myworld;
var ground;

var ball;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var options = {isStatic : true}

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(myworld,ground);
  var ball_option={restitution : 0.7}
  ball = Bodies.circle(200,100,40,ball_option);
  World.add(myworld,ball);

  console.log(ground);

}

function draw() {

  background(255,255,255);

  Engine.update(myengine);

  rectMode(CENTER)  ;
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40)
  
}
