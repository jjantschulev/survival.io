var terrain;
function Terrain() {
  this.dt = 0.03;
  this.scl = 20;
  this.terrain = []; // constains [x pos, y pos, heightVal]
  this.map = [];

  this.water = -30;
  this.sand = -20;
  this.dunes = 0;
  this.forest = 30;
  this.plains = 60;
  this.mountains = 100;

  this.show = function () {
    for (var i = 0; i < this.map.length; i++) {
      noStroke();
      fill(this.map[i].col)
      rect(this.map[i].x, this.map[i].y, this.scl, this.scl);
    }
  }



  this.generate = function (s) {
    this.terrain = [];
    var seed = s || floor(random(10000));
    noiseSeed(seed);
    console.log('Terrain seed : ' + seed);
    for (var x = 0; x < WORLD_WIDTH / this.scl; x += 1) {
      for (var y = 0; y < WORLD_HEIGHT / this.scl; y += 1) {
        var h = map(noise(x*this.dt, y*this.dt), 0, 1, -100, 100); //get noise value based on x , y coord
        this.terrain.push([x, y, h]); //add noise to array
      }
    }
    this.fillMap();
  }


  this.fillMap = function () {
    this.map = [];
    for(var i = 0; i < this.terrain.length; i ++){

      var h = this.terrain[i][2];
      var colour = 'rgb(0, 0, 0)';
      //height to colour mapping
      if(h < this.water) {
        colour = 'rgb(20, 88, 205)';
      }else if(h < this.sand) {
        colour = 'rgb(255, 200, 180)';
      }else if(h < this.dunes) {
        colour = 'rgb(127, 170, 85)';
      }else if(h < this.forest) {
        colour = 'rgb(26, 113, 56)';
      }else if(h < this.plains) {
        colour = 'rgb(157, 199, 68)';
      }else if(h < this.mountains) {
        colour = 'rgb(100, 100, 100)';
      }

      var data = {
        x : this.terrain[i][0] * this.scl,
        y : this.terrain[i][1] * this.scl,
        h : this.terrain[i][2],
        col : colour,
      }

      this.map.push(data);
    }
  }
}
