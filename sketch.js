
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananagroup, obstaclegroup
var score
var ground
var survivaltime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  background(200);
  
 monkey=createSprite(140,315,20,20)
 monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
ground=createSprite(300,350,600,10) 
  bananaGroup=new Group();
  obstacleGroup=new Group();
 survivaltime=0;
}

function draw() {
  background(200)
  stroke("black");
  textSize(20);
  text("Survival Time: "+survivaltime,100,50);
  survivaltime=survivaltime+Math.round(frameCount%25===0)
 ground.velocityX=-7;
  if(ground.x<300){
    ground.x=ground.width/2
  }
  monkey.collide(ground);
  
  if (keyDown("space")&&monkey.y>303){
     monkey.velocityY=-15;
     }
  monkey.velocityY=monkey.velocityY+0.8
  // console.log(monkey.y)
   bananas();
  obstacles();
drawSprites();  
}
function bananas(){
  if(frameCount%80===0){
    banana=createSprite(600,random(120,200),10,10);
    banana.velocityX=-5;
    banana.addImage( bananaImage)
    banana.scale=0.1
    banana.lifetime=150;
    bananaGroup.add(banana)
  }
   
}
function obstacles(){
     if (frameCount%300===0){
       obstacle=createSprite(600,315,10,10);
       obstacle.velocityX=-5;
       obstacle.addImage(obstacleImage);
       obstacle.scale=0.2
       obstacle.lifetime=150;
     }
   }




