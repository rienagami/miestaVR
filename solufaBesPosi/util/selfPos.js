!function() {
  var THREE = S.THREE;
  var cam = null;

  function getCamVec() {
    var camPos = cam.style.worldPos;
    return new THREE.Vector3(camPos[0], 0, camPos[2]);
  }

  window.selfPos = {
    width: 0.5,
    depth: 0.5,
    setCam(camera) {
      cam = camera;
    },
    go() {
      var targetPos = cam.childNodes[0].style.worldPos;
      var targetVec = new THREE.Vector3(targetPos[0], 0, targetPos[2]);
      targetVec.sub(getCamVec()).setLength(0.01);
      this.width = Math.max(0.01, Math.min(0.99, this.width - targetVec.x));
      this.depth = Math.max(0.01, Math.min(0.99, this.depth - targetVec.z));
    },
    back() {
      var targetPos = cam.childNodes[0].style.worldPos;
      var targetVec = new THREE.Vector3(targetPos[0], 0, targetPos[2]);
      targetVec.sub(getCamVec()).setLength(0.01);
      this.width = Math.max(0.01, Math.min(0.99, this.width + targetVec.x));
      this.depth = Math.max(0.01, Math.min(0.99, this.depth + targetVec.z));
    },
    right() {
      var targetPos = cam.childNodes[0].childNodes[0].style.worldPos;
      var targetVec = new THREE.Vector3(targetPos[0], 0, targetPos[2]);
      targetVec.sub(getCamVec()).setLength(0.01);
      this.width = Math.max(0.01, Math.min(0.99, this.width - targetVec.x));
      this.depth = Math.max(0.01, Math.min(0.99, this.depth - targetVec.z));
    },
    left() {
      var targetPos = cam.childNodes[0].childNodes[0].style.worldPos;
      var targetVec = new THREE.Vector3(targetPos[0], 0, targetPos[2]);
      targetVec.sub(getCamVec()).setLength(0.01);
      this.width = Math.max(0.01, Math.min(0.99, this.width + targetVec.x));
      this.depth = Math.max(0.01, Math.min(0.99, this.depth + targetVec.z));
    }
  };
}();
