var cam;

function Cam(maxX, maxY, zoom, target) {
  this.x = 0;
  this.y = 0;
  this.zoom = zoom;
  this.target = target;
  this.maxX = maxX;
  this.maxY = maxY;
  this.trackingSpeed = 0.1
}

Cam.prototype.update = function () {
  translate(width / 2, height / 2);
  if (this.target != null || this.target != undefined) {
    this.track(this.target);
  }
  translate(-this.x, -this.y);
  scale(this.zoom);
};

Cam.prototype.track = function (vector) {
  this.x = lerp(this.x, vector.x, this.trackingSpeed);
  this.y = lerp(this.y, vector.y, this.trackingSpeed);
  this.x = constrain(this.x, width/2, this.maxX * this.zoom - width/2);
  this.y = constrain(this.y, height/2, this.maxY * this.zoom - height/2);
};

Cam.prototype.grmp = function () {
  var mdata = {
    x: (mouseX + this.x) / this.zoom,
    y: (mouseY + this.y) / this.zoom,
  }
  return mdata;
};
