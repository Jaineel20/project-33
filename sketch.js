const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow2=[];
var maxsnow=20;
function preload(){
  backgroundImage=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  if(frameCount%15000===0){
    for(var i=0;i<maxsnow;i++){
      snow2.push(new Snow(random(0,800),random(0,400),100,100))
    }
  }
  
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  for(var i=0;i<maxsnow;i++){
    snow2[i].display();
    snow2[i].update()
  }

}