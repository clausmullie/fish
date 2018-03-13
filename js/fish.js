function Fish(x, y) {
  this.size = random() * 50 + 1;
  this.x = random() * width;
  this.y = random() * height;
  this.direction = [random() * 2 - 1, random() * 2 - 1];
}

Fish.prototype.draw = function() {
  this.update();
  ellipse(this.x, this.y, this.size, this.size);
};

Fish.prototype.update = function() {
  this.x = this.x + 1 * this.direction[0];
  this.y = this.y + 1 * this.direction[1];

  if (this.x > width + this.size / 2) {
    this.x = 0;
  }
  if (this.x < 0 - this.size / 2) {
    this.x = width;
  }
  if (this.y > height + this.size / 2) {
    this.y = 0;
  }
  if (this.y < 0 - this.size / 2) {
    this.y = height;
  }
};

Fish.prototype.reset = function(playerSize) {
  var sizeMultiplier = random() * 0.1 + 1;
  this.size *= sizeMultiplier;
  this.x = random() * width;
  this.y = random() * height;
  this.direction = [random() * 2 - 1, random() * 2 - 1];
};
