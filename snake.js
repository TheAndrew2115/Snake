function Snake() {
  this.x = 0
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.size = 0;
  this.tail = [];

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 2) {
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  this.die = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.size = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    if (this.size === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) { // tracking the history of the snake
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.size-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scal;
    this.y = this.y + this.yspeed*scal;

    this.x = constrain(this.x, 0, width-scal);
    this.y = constrain(this.y, 0, height-scal);

  }

  this.show = function() {
    fill(255); //255 is white
    for (var i = 0; i < this.tail.length; i++) { // tracking the history of the snake
      rect(this.tail[i].x, this.tail[i].y, scal, scal);
    }
    fill(255);
    rect(this.x, this.y, scal, scal);
  }
}
