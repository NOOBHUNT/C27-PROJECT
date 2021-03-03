
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var constraintedlog;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	

	boxObject1 = new Box(250,300);
	boxObject2 = new Box(300,300);
	boxObject3 = new Box(350,300);
	boxObject4 = new Box(400,300);
	boxObject5 = new Box(450,300);

	constraintedlog =new Log(100,150,50,PI/2);

	chain1 = new Chain(boxObject1.body,constraintedlog.body);
	chain2 = new Chain(boxObject2.body,constraintedlog.body);
	chain3 = new Chain(boxObject3.body,constraintedlog.body);
	chain4 = new Chain(boxObject4.body,constraintedlog.body);
	chain5 = new Chain(boxObject5.body,constraintedlog.body);

	
	
	World.add(world, Box);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 boxObject1.display();
 boxObject2.display();
 boxObject3.display();
 boxObject4.display();
 boxObject5.display();
  
 
 chain1.display();
  
 chain2.display();
  
 chain3.display();
  
 chain4.display();
  
 chain5.display();
  drawSprites();
 
}



