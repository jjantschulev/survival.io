Player.prototype.reactToBiomes = function () {
  var biome = this.getBiome();
  switch (biome) {
    case WATER:
      this.energy -= this.vel.mag() / this.speed * 0.02;
      break;
    case SAND:
      this.energy -= this.vel.mag() / this.speed * 0.002;
      break;
    case GRASS:
      this.energy -= this.vel.mag() / this.speed * 0.002;
      break;
    case FOREST:
      this.energy -= this.vel.mag() / this.speed * 0.006;
      break;
    case HIGHLAND:
      this.energy -= this.vel.mag() / this.speed * 0.003;
      break;
    case MOUNTAIN:
      this.energy -= this.vel.mag() / this.speed * 0.013;
      break;
    default:

  }
}

Player.prototype.updateVitals = function () {
  this.reactToBiomes();
}
