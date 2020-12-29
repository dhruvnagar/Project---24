const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var background;
var paper;

function setup() {
	var canvas = createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  
  var ground_options ={
    isStatic: true
}

var box_options ={

  isStatic: true

}

var box1_options ={

  isStatic: true

}

var box2_options ={

  isStatic: true

}



ground = Bodies.rectangle(200,380,400,10,ground_options);
fill("green");
//World adds our body inside this world
World.add(world,ground);


	box = Bodies.rectangle(350, 355, 10, 40, box_options);
    fill("red");
    World.add(world, box);

    box1 = Bodies.rectangle(300, 370, 100, 10, box1_options);
    fill("red");
    World.add(world, box);

    box2 = Bodies.rectangle(250, 355, 10, 40, box2_options);
    fill("red");
    World.add(world, box);

    
    paper = new Paper(200, 200);
    

    }


function draw() {
  rectMode(CENTER);
  background("blue");
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  rectMode(CENTER)
  rect(box.position.x, box.position.y, 10, 40);

  rectMode(CENTER)
  rect(box1.position.x, box1.position.y, 90, 10);

  rectMode(CENTER)
  rect(box2.position.x, box2.position.y, 10, 40);
 
  paper.display();

  drawSprites();
 
}