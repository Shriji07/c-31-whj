const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle;
var turn = 0;
//var count = 0;
var gamestate = "play";
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;




function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {

       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {

       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {

       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {

       plinkos.push(new Plinko(j,375));
    }  
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  fill("red");
  for (var i = 0; i < particles.length; i++) {

  plinkos[i].display();

  }
 line(0,490,900, 490);


   if(frameCount%60===12){
    particles.push(new Particle(random(width/2-100, width/2+100), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }

   for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
   }

} 