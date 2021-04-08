var boardI,arrowI,strikerI,redI,yellowI;
var borders,wood1,wood2,wood3,wood4;
var arrow,striker,token1,token2,token3,token4,token5;


function preload()
{
    //Loading images in preload function
    boardI = loadImage("board.png");
    arrowI = loadAnimation("arrow1.png","arrow2.png","arrow3.png");
    strikerI = loadImage("striker.png");
    redI = loadImage("red.png");
    yellowI = loadImage("yellow.png");
}

function setup()
{
    createCanvas(400,400);
    //created borders Group
    borders = createGroup();

    //created woods sprites
    wood1 = createSprite(200,0,400,52);
    wood1.shapeColor=("#6F4D31");
    borders.add(wood1);

    wood2 = createSprite(0,200,52,400);
    wood2.shapeColor=("#6F4D31");
    borders.add(wood2);

    wood3 = createSprite(200,400,400,52);
    wood3.shapeColor=("#6F4D31");
    borders.add(wood3);
    
    wood4 = createSprite(400,200,52,400);
    wood4.shapeColor=("#6F4D31");
    borders.add(wood4);
    borders.bounciness=0.5;

    //created arrow
    arrow = createSprite(200,250);
    arrow.addAnimation("arrow",arrowI);
    arrow.scale=0.4;
    arrow.visible=false;
    arrow.rotateToDirection=true;
    arrow.pause();

    //created striker sprite
    striker = createSprite(200,310);
    striker.addImage("striker",strikerI);
    striker.scale=0.15;
    striker.rotation=270;
    striker.setCollider("circle",0,0,110);

    //created Tokens sprites
    token1 = createSprite(200,200);
    token1.addImage("yellow",yellowI);
    token1.scale=0.15;
    token1.setCollider("circle",0,0,80);

    token2 = createSprite(240,200);
    token2.addImage("red",redI);
    token2.scale=0.15;
    token2.setCollider("circle",0,0,80);

    token3 = createSprite(160,200);
    token3.addImage("red",redI);
    token3.scale=0.15;
    token3.setCollider("circle",0,0,80);

    token4 = createSprite(200,240);
    token4.addImage("red",redI);
    token4.scale=0.15;
    token4.setCollider("circle",0,0,80);

    token4 = createSprite(200,160);
    token4.addImage("red",redI);
    token4.scale=0.15;
    token4.setCollider("circle",0,0,80);
}

function draw()
{
    background(boardI);
    createEdgeSprites();
    
    /*striker.bounceOff(borders);
    token1.bounceOff(borders);
    token2.bounceOff(borders);
    token3.bounceOff(borders);
    token4.bounceOff(borders);
    token5.bounceOff(borders);*/

    //bouncing striker if get touch with tokens.
    striker.bounce(token1);
    striker.bounce(token2);
    striker.bounce(token3);
    striker.bounce(token4);
    striker.bounce(token5);
    
    //bouncing token1 if get touch with another token
    token1.bounce(token2);
    token1.bounce(token3);
    token1.bounce(token4);
    token1.bounce(token5);

    //bouncing token2 if get touch with another token
    token2.bounce(token3);
    token2.bounce(token4);
    token2.bounce(token5);

    //bouncing token3 if get touch with another token
    token3.bounce(token4);
    token3.bounce(token5);

    //bouncing token4 if get touch with token5
    token4.bounce(token5);
    drawSprites();
    
}