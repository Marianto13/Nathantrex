var trex
var trex_pngrun
var cloud

function preload() {
  trex_run = loadAnimation("/Running_GIF/sprite_00.png", "/Running_GIF/sprite_01.png",
    "/Running_GIF/sprite_02.png", "/Running_GIF/sprite_03.png", "/Running_GIF/sprite_04.png",
    "/Running_GIF/sprite_05.png", "/Running_GIF/sprite_06.png", "/Running_GIF/sprite_07.png",
    "/Running_GIF/sprite_08.png", "/Running_GIF/sprite_09.png", "/Running_GIF/sprite_10.png",
    "/Running_GIF/sprite_11.png", "/Running_GIF/sprite_12.png", "/Running_GIF/sprite_13.png")

  groundIMG = loadImage("NewProject2.png")
  //loadAnimation("background.desert (2)/sprite_0.png", "background.desert (2)/sprite_1.png", "background.desert (2)/sprite_2.png", "background.desert (2)/sprite_3.png", "background.desert (2)/sprite_4.png", "background.desert (2)/sprite_5.png", )
  backgroundIMG = loadImage("bg.jpg")
  cloudIMG = loadImage("download-removebg-preview (2).png")

  trex_jump = loadAnimation("jump animation.right/sprite_00.png", "jump animation.right/sprite_01.png", "jump animation.right/sprite_02.png",
     "jump animation.right/sprite_03.png", "jump animation.right/sprite_04.png", "jump animation.right/sprite_05.png", "jump animation.right/sprite_06.png",
     "jump animation.right/sprite_07.png", "jump animation.right/sprite_08.png", "jump animation.right/sprite_09.png", "jump animation.right/sprite_10.png",
     "jump animation.right/sprite_11.png", "jump animation.right/sprite_12.png", "jump animation.right/sprite_13.png", "jump animation.right/sprite_14.png",
     "jump animation.right/sprite_15.png", "jump animation.right/sprite_16.png", "jump animation.right/sprite_17.png", "jump animation.right/sprite_18.png",
     "jump animation.right/sprite_19.png", "jump animation.right/sprite_20.png", "jump animation.right/sprite_21.png", "jump animation.right/sprite_22.png", )
  //trex_jump = loadAnimation("sprite_00/l0_sprite_1.png", "sprite_00/l1_sprite_3.png", "sprite_00/l2_sprite_2.png")
  trex_run.playing = true;
  trex_jump.playing = true;
}

function setup() {

  createCanvas(600, 200);

  ground = createSprite(200, 180, 600, 200);
  ground.addImage("ground", groundIMG);
  ground.x = ground.width / 2;


  trex = createSprite(100, 150, 0, 50)

  trex.addAnimation("run", trex_run)
  trex.addAnimation("jump", trex_jump)
  trex.changeAnimation("run")
  trex.scale = 0.9
  
  edges = createEdgeSprites()
 

}


function draw() {

  background("blue")
  if (keyDown("SPACE") && trex.y >= 160) {

    trex.velocityY = -8.5
    trex.changeAnimation("jump")
  }
  if (trex.velocityY > 0) {
    trex.changeAnimation("run")
  }
  console.log("y  : " + trex.velocityY)


  drawSprites()
  trex.velocityY += 0.5
  trex.collide(edges[3])
  //ground.velocityX= ground.velocityX-0.000000000000000000005
  ground.velocityX = -5
  //console.log(ground.x)
  if (ground.x < 0) {
    ground.x = ground.width / 2

  }
  spawnclouds()
  spawnclouds2()



}

function spawnclouds() {
  if (frameCount % 35 === 0) {
    j = Math.round(random(0, 100))
    cloud = createSprite(600, j, 75, 40)
    cloud.addImage(cloudIMG)
    cloud.scale = 0.4
    cloud.velocityX = -4
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
  }

}

function spawnclouds2() {
  if (frameCount % 24 === 0) {
    j = Math.round(random(0, 100))
    cloud = createSprite(600, j, 75, 40)
    cloud.addImage(cloudIMG)
    cloud.scale = 0.4
    cloud.velocityX = -4
        
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
  }

}