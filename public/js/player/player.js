var player;

function Player() {
  this.pos = createVector(0, 0);
  this.vel = createVector(0, 0);
  this.speed = 4;
  this.diameter = GRID_SIZE;
  this.radius = GRID_SIZE/2;

  this.hunger = 100;
  this.health = 100;
  this.energy = 100;
}

Player.prototype.show = function () {
  noStroke();
  fill(50);
  ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
};

Player.prototype.update = function () {
  if (this.getBiome() == WATER) {
    this.speed = 1.5;
  } else if (this.getBiome() == FOREST) {
    this.speed = 3.2;
  } else if (this.getBiome() == MOUNTAIN) {
    this.speed = 2.5;
  } else {
    this.speed = 4;
  }

  this.vel.setMag(constrain(this.vel.mag(), 0, this.speed));
  this.pos.add(this.vel);
  this.vel.mult(0.9);

  this.constrain();
  this.updateVitals();
};

Player.prototype.getBiome = function () {
  var x = int(this.pos.x / GRID_SIZE)
  var y = int(this.pos.y / GRID_SIZE)
  var h = terrain.terrain[y][x]
  return terrain.getBlockType(h);
};

Player.prototype.showInfo = function () {
  var barHeight = 15;
  var barWidth = 1.5;

  noStroke();
  fill(255, 0, 0);
  var healthX = this.health * barWidth;
  rect(width-healthX, barHeight*0, healthX, barHeight)
  fill(0, 255, 255);
  var healthX = this.hunger * barWidth;
  rect(width-healthX, barHeight*1, healthX, barHeight)
  fill(255, 255, 0);
  var healthX = this.energy * barWidth;
  rect(width-healthX, barHeight*2, healthX, barHeight)
};
