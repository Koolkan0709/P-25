
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper, paperImg;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	paperImg = loadImage("paper.png")

	

	paper = new Paper(300,600,35);

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

}


function draw() {
  //rectMode(CENTER);
  background("white");

  //image(paperImg ,paper.x,paper.y,40,40);

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-100});
	}
}
