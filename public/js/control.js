var keys = [];
window.onkeydown = function (e) {
  var k = e.key;
  if(keys.indexOf(k) == -1){
    keys.push(k);
  }
}

window.onkeyup = function (e) {
  var k = e.key;
  if(keys.indexOf(k) != -1){
    keys.splice(keys.indexOf(k), 1);
  }
}

function keyHold() {
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if(k == 'd'){
      player.move(1, 0);
    }
    if(k == 'a'){
      player.move(-1, 0);
    }
    if(k == 'w'){
      player.move(0, -1);
    }
    if(k == 's'){
      player.move(0, 1);
    }

  }
}
