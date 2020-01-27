var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();
scene.add(light);
// var material = [
//     new THREE.MeshPhongMaterial({ color: "#7D2906", specular: 0x555555, shininess: 30}),     // for the +x face
//     new THREE.MeshPhongMaterial({color: "#7D2906", shininess: 30}),    // for the -x face
//     new THREE.MeshPhongMaterial({color: "#7D2906", shininess: 30}),   // for the +y face
//     new THREE.MeshPhongMaterial({color: "#7D2906", shininess: 30}), // for the -y face
//     new THREE.MeshPhongMaterial({color: "#7D2906", shininess: 30}),    // for the +z face
//     new THREE.MeshPhongMaterial({color: "#7D2906", shininess: 30})   // for the -z face
// ];

var material = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  map: new THREE.TextureLoader().load('https://ncsucgclass.github.io/prog4/tree.png'),
});

for (var i = 0; i < 10; i++) {

  // var texture = new THREE.TextureLoader().load( 'SnakeSkin.jpg' );

  //  var material = new THREE.MeshBasicMaterial( { map: texture } );

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  //   var material = new THREE.MeshBasicMaterial({color: 0xff0051});
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x += 1.0 * i;
  scene.add(cube);

  geometry = new THREE.BoxGeometry(1, 1, 1);
  cube = new THREE.Mesh(geometry, material);
  cube.position.y += 1.0 * i;
  scene.add(cube);

  geometry = new THREE.BoxGeometry(1, 1, 1);
  cube = new THREE.Mesh(geometry, material);
  cube.position.x = 10;
  cube.position.y += 1.0 * i;
  scene.add(cube);

  geometry = new THREE.BoxGeometry(1, 1, 1);
  cube = new THREE.Mesh(geometry, material);
  cube.position.y = 10;
  cube.position.x += 1.0 * i;
  scene.add(cube);

  geometry = new THREE.BoxGeometry(1, 1, 1);
  cube = new THREE.Mesh(geometry, material);
  cube.position.y = 10;
  cube.position.x += 1.0 * 10;
  scene.add(cube);
}

var geometryPlane = new THREE.PlaneGeometry(10000, 10000, 100, 100);
var plane = new THREE.Mesh(geometryPlane, material);
plane.rotation.x = -90 * Math.PI / 100;
plane.position.y = -100;
scene.add(plane);


camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 10;

var animate = function () {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();