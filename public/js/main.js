
function setup() {
  createCanvas(1280, 720);
  player = new Player();
  terrain = new Terrain();
  cam = new Cam(WORLD_WIDTH, WORLD_HEIGHT, 1, player.pos);
}

function draw() {
  background(245);
  keyHold();

  push();
  cam.update();
  terrain.show();

  player.show();
  player.update();
  pop();

  player.showInfo();
}
