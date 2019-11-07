var angle = 0;
var slider;


function setup() {
  createCanvas(800, 800);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(400, height);
  branch(200);
  noLoop();
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle * random());
    branch(len * 0.77);
    pop();
    push();
    rotate(-angle * random());
    branch(len * 0.70);
    pop();
  }


  //line(0, 0, 0, -len * 0.67);
}

function mousePressed() {
   redraw();
 }
