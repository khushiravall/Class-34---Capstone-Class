// game idea: nighttime background, there is a robber with hanging of a rope,
// trying to get the gold. The aim of the game is for the robbers to get 
// all three of the gold bags,and they will recive stars for each bag of gold they get.
// Game is finished,once all bags have been colleced. 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;

function preLoad()
{

  backgroundImg = loadImage("background.jpg");
  

}

function setup() 
{
  createCanvas(500,600);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  imageMode(CENTER)
  image(backgroundImg,250,300);
  Engine.update(engine);
  
}

