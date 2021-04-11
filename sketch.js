var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
   canvas = createCanvas(800,600);

   //create 4 different surfaces
   surface1 = createSprite(90,600,190,50);
   surface1.shapeColor = "red";
   surface2 = createSprite(290,600,190,50);
   surface2.shapeColor = "yellow";
   surface3 = createSprite(490,600,190,50);
   surface3.shapeColor = "blue";
   surface4 = createSprite(705,600,220,50);
   surface4.shapeColor = "green"

   //create box sprite and give velocity
   box = createSprite(400,400,50,50);
   box.velocityX=-5;
   box.velocityY=5; 
   box.shapeColor = "white";
}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();
    createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
   if(surface1.isTouching(box) && box.bounceOff(surface1)){
   box.shapeColor = "red";
   }

   if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "yellow";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "blue";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
    }

    if(surface1.isTouching(box)){
        box.shapeColor = "red";
        box.velocityX = 0;
        music.play();
    }

    if(surface2.isTouching(box)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        music.stop();
    }

    if(surface3.isTouching(box)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        music.play();
    }

    if(surface4.isTouching(box)){
        box.shapeColor = "green";
        box.velocityX = 0;
        music.stop();
    }

    drawSprites();
}
