
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer1=new hammer(550,200)
stone1=new stone(400,200,70,60)
ground1=new ground(600,390,1200,10)
rubber1=new rubber(740,80,4)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer1.display()
 stone1.display()
 ground1.display()
 rubber1.display()
}



