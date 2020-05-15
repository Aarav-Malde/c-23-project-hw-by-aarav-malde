var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b1,b2,b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;




function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}



function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);

	var aaravmadeit ={
		restitution:1
	}
	

	packageSprite= createSprite(width/2, 80, 10,10,aaravmadeit);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite.velocityX=10

	helicopterSprite= createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="green";
	groundSprite.debug="true";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world,packageBody);

	
	b1 = createSprite(400,750,200,20);
	b1.shapeColor="red";

	b2 = createSprite(290,710,20,100);
	b2.shapeColor="red";

	b3 = createSprite(510,710,20,100);
	b3.shapeColor="red";

	b1 = new Boxes(400,750,200,20);
    b3 = new Boxes(290,710,20,100);
    b2 = new Boxes(510,710,20,100);
    

	//Create a Ground
	ground = Bodies.rectangle(width/2, 750, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	keyPressed();
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

    b1.debug=true;
	b2.debug=true;
	b3.debug=true;
	ground.debug=true;
	
	
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
 }

 if(keyDown("DOWN_ARROW")){
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:false});
}
}



