var snake;
var scal = 20;
var food;

function setup() {
  createCanvas(500, 500);
  snake = new Snake();
  frameRate(10);
  pickLoc(); //make the food appear
}

function pickLoc() { //randomize where the food shows up
  var cols = floor(width/scal);
  var rows = floor(height/scal);
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scal);
}

function draw() {
  background(51);

  if (snake.eat(food)) {
    pickLoc();
  }
  snake.die();
  snake.update();
  snake.show();

  fill(255,0,100);
  rect(food.x, food.y, scal, scal);
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.yspeed != 1) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && snake.yspeed != -1) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && snake.xspeed != -1) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && snake.xspeed != 1) {
    snake.dir(-1, 0);
  }
}
