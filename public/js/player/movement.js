Player.prototype.move = function (x, y) {
  if(x != 0) {
    var nx = lerp(this.vel.x, x*this.speed*2, 0.1);
    this.vel.x = nx;
  }else {
    var ny = lerp(this.vel.y, y*this.speed*2, 0.1);
    this.vel.y = ny;
  }
};

Player.prototype.constrain = function () {
  this.pos.x = constrain(this.pos.x, this.radius, WORLD_WIDTH-this.radius);
  this.pos.y = constrain(this.pos.y, this.radius, WORLD_HEIGHT-this.radius);
};
