var newt, grindelwald, demiguise, dragon, pickett;
var newt_img, grindelwald_img, demiguise_img, dragon_img, pickett_img;
var wall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

function preload(){
  newt_img = loadImage("Images/newt1.png");
  grindelwald_img = loadImage("Images/grindelwald.png");
  demiguise_img = loadImage("Images/demiguise.png");
  dragon_img = loadImage("Images/dragon.png");
  pickett_img = loadImage("Images/pickett.png");
}

function setup() {
  createCanvas(displayWidth-10, displayHeight-145);

  newt = createSprite(500, 185, 200, 200);
  newt.addImage(newt_img);
  newt.scale = 0.125;

  wall = createSprite(780, 20, 1400, 10);
  wall1 = createSprite(1480, 170, 10, 300);
  wall2 = createSprite(1480, 560, 10, 300);
  wall3 = createSprite(80, 170, 10, 300);
  wall4 = createSprite(80, 560, 10, 300);
  wall5 = createSprite(780, 710, 1400, 10);
  wall6 = createSprite(300, 150, 10, 150);
  wall7 = createSprite(190, 220, 210, 10);
  wall8 = createSprite(370, 150, 10, 150);
  wall9 = createSprite(845, 220, 955, 10);
  wall10 = createSprite(915, 150, 950, 10);
  wall11 = createSprite(360, 310, 400, 10);
  wall12 = createSprite(800, 60, 10, 70);
  wall13 = createSprite(620, 90, 360, 10);
  wall14 = createSprite(1140, 90, 500, 10);
  wall14 = createSprite(2335, 120, 10, 70);
  wall15 = createSprite(1390, 120, 10, 70);
  wall16 = createSprite(1390, 425, 10, 400);
  wall17 = createSprite(360, 400, 400, 10);
  wall18 = createSprite(165, 500, 10, 200);
  wall19 = createSprite(410, 600, 500, 10);
  wall20 = createSprite(465, 655, 600, 10);
  wall21 = createSprite(760, 435, 10, 430);
  wall22 = createSprite(510, 500, 500, 10);
  wall23 = createSprite(260, 550, 10, 100);
  wall24 = createSprite(1110, 300, 560, 10);
  wall25 = createSprite(1100, 380, 430, 10);
  wall26 = createSprite(830, 500, 10, 270);
  wall27 = createSprite(880, 475, 10, 200);
  wall28 = createSprite(1080, 630, 500, 10);
  wall29 = createSprite(940, 500, 10, 100);
  wall30 = createSprite(1120, 450, 350, 10);
  wall31 = createSprite(1120, 550, 350, 10);
}

function draw() {
  background("lightblue");  
  drawSprites();
}