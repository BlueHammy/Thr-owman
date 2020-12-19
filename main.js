var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
camera.position.z = 100;
scene.add(camera);

var boxGeometry = new THREE.BoxGeometry(50, 40, 70);
boxGeometry.translate(0,5,40);
var basicMaterial = new THREE.MeshStandardMaterial({color: 0xFBB8F9});
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.5, 0, 0);

const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 0, 0, 0 );
scene.add( light );

function createLights() {
    globalLight = new THREE.AmbientLight(0xffffff, .008);

    shadowLight = new THREE.DirectionalLight(0xffffff, .008);
    shadowLight.position.set(0, 40, 20);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 2000;
    shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;

    scene.add(globalLight);
    scene.add(shadowLight);
}

function particles(){

            particleCount = 1800,
            particles = new THREE.Geometry();
            var pMaterial = new THREE.ParticleBasicMaterial({color: 0x181818, size: 0.5});

            for (var i = 0; i < particleCount; i++)
            {
                var pX = Math.random() * 500 - 250,
                    pY = Math.random() * 500 - 250,
                    pZ = Math.random() * 500 - 250,
                    particle = new THREE.Vector3(pX, pY, pZ);

                particles.vertices.push(particle);
            }

            particleSystem = new THREE.ParticleSystem(particles, pMaterial);
            scene.add(particleSystem);
          }
function render() {

    requestAnimationFrame(render);
    renderer.render(scene, camera);
      createLights();
      var pCount = particleCount;
          while (pCount--)
          {
              var particle = particles.vertices[pCount];
              particle.y = Math.random() * 500 - 250;
              particleSystem.geometry.vertices.needsUpdate = true;
          }
}

render();
