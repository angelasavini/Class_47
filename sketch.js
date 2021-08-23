var tom, jerry;
var tomImg, jerryImg1, jerryImg2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
tomImg = loadImage("Images/tom.png")

jerryImg1 = loadAnimation("Images/jerry.png")
jerryImg2 = loadAnimation("Images/jerry2.png")
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 tom = createSprite(200,200,50,50)
 tom.addImage("running",tomImg)
 tom.scale=0.1
 
 jerry = createSprite(100,200,50,50)
 jerry.addAnimation("running", jerryImg1)
 jerry.scale=0.1
}

function draw() {
  background(0); 
  Engine.update(engine);
tom.x = mouseX
tom.y = mouseY

if(tom.isTouching(jerry)){
  jerry.changeAnimation("caught",jerryImg2)
  jerry.scale=0.1

  strokeWeight(5)
  stroke("red")
text ("You Won",200,200)
jerry.x = 200
jerry.y=100
}
else{
  jerry.x = random(100,300)
  jerry.y = random(50,350)}

drawSprites()

 
}
