

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy ;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(800,1000);



    boy = new Umbrella (200,200,50,50);


    
    engine = Engine.create();
    world = engine.world;

}
  

function draw(){
    
        background(0);
    
  
    Engine.update(engine);
    
  jjn  
} 

