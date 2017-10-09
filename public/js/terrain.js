var terrain;
function Terrain() {
  this.dt = 0.03;
  this.terrain = [];

  this.water = -30;
  this.sand = -20;
  this.dunes = -5;
  this.forest = 20;
  this.plains = 40;
  this.mountains = 100;

  this.image = createImage(WORLD_WIDTH / GRID_SIZE, WORLD_HEIGHT / GRID_SIZE);

  this.generate();
}

Terrain.prototype.show = function () {
  noSmooth()
  image(this.image, 0, 0, WORLD_WIDTH, WORLD_HEIGHT);
  smooth();
};

Terrain.prototype.generate = function (s) {
  var seed = s || floor(random(10000));
  console.log('Terrain seed : ' + seed);
  noiseSeed(seed);

  this.terrain = [];
  for (var y = 0; y < WORLD_HEIGHT / GRID_SIZE; y ++) {
    var row = [];
    for (var x = 0; x < WORLD_WIDTH / GRID_SIZE; x ++) {
      var h = map(noise(x*this.dt, y*this.dt), 0, 1, -100, 100);
      row.push(h);
    }
    this.terrain.push(row);
  }
  this.makeImage();
};

Terrain.prototype.makeImage = function () {
  this.image.loadPixels();
  for(var x = 0; x < this.image.width; x++) {
    for(var y = 0; y < this.image.height; y++) {
      var c = this.getColour(this.terrain[y][x]);
      this.image.set(x, y, [red(c), green(c), blue(c), 255]);
    }
  }
  this.image.updatePixels();
};

Terrain.prototype.getColour = function (h) {
  var colour = color(0, 0, 0);

  if(h <= this.water) {
    colour = color(20, 88, 205);
  }else if(h <= this.sand) {
    colour = color(255, 200, 180);
  }else if(h <= this.dunes) {
    colour = color(127, 170, 85);
  }else if(h <= this.forest) {
    colour = color(26, 113, 56);
  }else if(h <= this.plains) {
    colour = color(136, 242, 0);
  }else if(h <= this.mountains) {
    colour = color(100, 100, 100);
  }
  return colour;
};

Terrain.prototype.getBlockType = function (h) {
  var type = color(0, 0, 0);

  if(h <= this.water) {
    type = WATER;
  }else if(h <= this.sand) {
    type = SAND;
  }else if(h <= this.dunes) {
    type = GRASS;
  }else if(h <= this.forest) {
    type = FOREST;
  }else if(h <= this.plains) {
    type = HIGHLAND;
  }else if(h <= this.mountains) {
    type = MOUNTAIN;
  }
  return type;
};
