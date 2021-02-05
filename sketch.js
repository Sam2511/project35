
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var balloon,balloon1;
var bg;
var db;
var position;
var ballLocation;


 
function preload()
{
	bg = loadImage("images/Hot Air Ballon-01.png");
	balloon1 = loadImage("images/Hot Air Ballon-02.png")
}

function setup() {
	createCanvas(1000,750);


	engine = Engine.create();
	world = engine.world;

	db = firebase.database();

    balloon = createSprite(250,250,10,10);
	balloon.addImage(balloon1);

    var ballLocation = db.ref("Balloon/height");
    ballLocation.on("value", readPos, showErr);


	
	

	//Create the Bodies Here.a


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  if(keyDown(LEFT_ARROW)){
	balloon.x = balloon.x - 10;
}
else if(keyDown(RIGHT_ARROW)){
	balloon.x = balloon.x + 10;
}
else if(keyDown(UP_ARROW)){
	balloon.y = balloon.y - 10;
}
else if(keyDown(DOWN_ARROW)){
	balloon.y = balloon.y + 10;}
  
  drawSprites();
 
}


function readPos(data){
    position = data.val();  //copies the info from data to position

    balloon.x = position.x;
    balloon.y = position.y;
}

function showErr(){
    console.log("ERROR in the db");
}

