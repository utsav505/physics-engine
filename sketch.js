const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    var ball_option ={
        restitution : 1.0
    }

    ball = Bodies.circle(200,100,15,ball_option);
    World.add(world,ball);

    ob1 = Bodies.circle(205,300,20);
    World.add(world,ob1);
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    circle(ball.position.x,ball.position.y,30);
    ellipseMode(CENTER);
    ellipse(ob1.position.x,ob1.position.y,40,40);
}