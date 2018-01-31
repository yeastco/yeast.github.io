// x position variable
var xpos = 200;
// y position variable
var ypos = 100;
// numPixels variable
var numPixels = 50;

// target x and y positions
var targetX;
var targetY;

// easing variable
var easing = 0.05;
var characters;
var particleImage;

var MARGIN = 40;
var box;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  w= windowWidth;
  h= windowHeight;
  background(255);

  text = createSprite(windowWidth/2, windowHeight/2, 300,50);
  //particleImage = loadImage("assets/part.png");
  text.immovable=true;
  text.visible=false;
  characters = new Group();

  for(var i = 0; i<30; i++) {
  var ang = random(360);
  var image=int(random(1,5));
  var px = width/2 + 1000 * cos(radians(ang));
  var py = height/2+ 1000 * sin(radians(ang));
  createPart(image, px, py);
  }


}

function draw() {
  background(255);
  // set the ellipse mode
  ellipseMode(CENTER);



    for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
  if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
  if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
  if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }


  characters.bounce(characters);
  characters.bounce(text);

  // calculate the new xpos value
  var dx = targetX - xpos;
  if(abs(dx) > 1) {
    xpos += dx * easing;
  }

  // calculate the new ypos value
  var dy = targetY - ypos;
  if(abs(dy) > 1) {
    ypos += dy * easing;
  }

  drawSprites();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
  w=windowWidth;

}

function createPart(type, x, y) {
  var a = createSprite(x, y);
  a.type = type;
  // console.log(type);
  var img  = loadImage("assets/"+type+".png");
  a.addImage(img);
  a.setSpeed(0.5, random(360));
  a.rotationSpeed = random(0.2 ,0.5);
  //a.debug = true;
  a.scale = .2;

  a.mass = 2+a.scale;
  a.setCollider("circle", 0, 0, 60);
  characters.add(a);
  return a;
}

function keyPressed()
{

}
