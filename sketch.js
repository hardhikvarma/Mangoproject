
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var boy,boyImg;
var slingShot;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload()
{
	boyImg = loadImage("BOY.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,670,1600,10);
	stone = new Stone(570,490,50);
	tree = new Tree(1000,650);

	slingShot = new Slingshot(stone.body,{x:100,y:450});

	mango1 = new Mango(1000,400,25);
	mango2 = new Mango(1100,300,25);
	mango3 = new Mango(900,400,25);
	mango4 = new Mango(900,300,25);
	mango5 = new Mango(1100,400,25);
	mango6 = new Mango(1000,300,25);
	mango7 = new Mango(1000,200,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 image(boyImg,100,420,150,250)
  
  ground.display();
  tree.display();
  stone.display();
  slingShot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
 
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
	 slingShot.attach(stone.body);
	}
   }

   function detectollision(lstone,lmango){
 mangoBodyPosition = lmango.body.position;
 stoneBodyPosition = lstone.body.position;
 var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r)
 {
Matter.Body.setStatic(lmango.body,false);
 }

   }