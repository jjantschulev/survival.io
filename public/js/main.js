

function setup() {
  createCanvas(1280, 720);
  terrain = new Terrain();
  terrain.generate(8432);
}

function draw() {
  background(245);
  terrain.show();
  console.log(frameRate());
}
