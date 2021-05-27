const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var box1,box2, box3, box4, box5;
var ground1;
var stick1,stick2, stick3, stick4;
var pig1,pig2;
var redBird;

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  /*
  
  ball=Bodies.circle(200,200,30,recover);
  mayank=Bodies.rectangle(200,380,100,20,barrier);
  World.add(world,mayank);
  World.add(world,ball);
  console.log(mayank.position.x);
  console.log(mayank.position.y);*/
  ground1 = new ground(600,height,1200,20);
  box1 = new box(700,320,70,70);
  box2 = new box(920,320,70,70);
  
  stick1 = new stick(810,260,300,PI/2);
  
  box3 = new box(700,240,70,70);
  box4 = new box(920,240,70,70);

  stick2 = new stick(810,180,300,PI/2);
  
  box5= new box(810,170,70,70);

  stick3= new stick(785,120,150,PI/7);
  stick4= new stick(815,120,150,-PI/7);

  pig1 = new Pig(810,350);
  pig2= new Pig(810,220);

  redBird = new bird(150,150)
}

function draw() {
  background(0);  
  
  Engine.update(engine);
 /* rectMode(CENTER);
  fill("green");
  rect(mayank.position.x,mayank.position.y,400,20);
  ellipseMode(RADIUS);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,30);*/
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  pig2.display();
  pig1.display();
  redBird.display();
}