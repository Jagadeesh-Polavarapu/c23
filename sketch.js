const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var o1={
        isStatic : true
    }
   ground=Bodies.rectangle(200,380,400,10,o1);
   World.add(world,ground);

   var b1={
     restitution  : 1,
     friction : 0.8
   }
    object = Bodies.rectangle(200,100,20,20,b1);
    World.add(world,object);

    console.log(object);
    box1=new Box(300,300,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   rect(object.position.x,object.position.y,40,40);
   rect(ground.position.x,ground.position.y,400,10);

 box1.display();
}