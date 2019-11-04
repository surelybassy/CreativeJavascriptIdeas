let img;
let vid;
let theta = 0;

var x;
var changeDirection;



function setup() {
  createCanvas(710, 400, WEBGL);
  img = loadImage('https://geo-media.beatport.com/image/fa1885f3-a9bf-4ac4-a6eb-99c9de5407b7.jpg');
  x = 240;
	changeDirection = false;
}

function draw() {
  background(250);

  translate(-x, -100, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  texture(img);

  plane(70);
  pop();

  translate(x, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.01);
  texture(img);
  box(70, 70, 70);
  pop();

  translate(x, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  cylinder(70, 70);
  pop();

  translate(-x * 2, 200, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  cone(70, 70);
  pop();

  translate(x, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  torus(70, 20);
  pop();

  translate(x, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  sphere(70);
  pop();

  if(x>width){
    changeDirection=true}
  //if the circle passes the right side, change the direction
  //effects of direction change happen below
  else if (x<=0){
    changeDirection=false}
  //if the circle passes the left side (or becomes equal to 0)
  //changes the direction, effects are in the next if statement below

  if (x>=0 && changeDirection == false){
    x=x+1}
  //if x is greater than OR equal to 0, move right
  else if(changeDirection == true){
    x=x-1}
}
