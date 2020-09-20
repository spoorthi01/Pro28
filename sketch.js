var paper;
var bin,bottom,side1,side2;
var world;
var launcher;
var ground;
var engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	paper = new Paper(500,300);
	bin = new Bin(1200,650);
	ground = Bodies.rectangle(width/2, 670, width, 20 , {isStatic:true} );
	ground.shapeColor = color("yellow");
	World.add(world, ground);
	launcher = new Launcher(paper.body,{x:500,y:150});

	Engine.run(engine);

}


function draw() {
  background(250);

  paper.display();
  bin.display();
  launcher.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20);

}

// function keyPressed(){
// 	if(keyCode === UP_ARROW){
// 	   Matter.Body.applyForce(paper.body,paper.body.position,{x:42,y:-84});
// 	}
// }

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}


