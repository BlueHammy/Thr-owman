var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var fieldDistance;

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

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 452,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.873313463449028,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 108.1626766657053,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 0,
      "color": "#ffffff",
      "opacity": 0,
      "width": 0
    },
    "move": {
      "enable": true,
      "speed": 4.807230074031347,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "remove"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}
);

// const light = new THREE.PointLight( 0xff0000, 1, 100 );
// light.position.set( 0, 0, 0 );
// scene.add( light );
//
// function createLights() {
//     globalLight = new THREE.AmbientLight(0xffffff, .002);
//
//     shadowLight = new THREE.DirectionalLight(0xffffff, .002);
//     shadowLight.position.set(0, 40, 20);
//     shadowLight.castShadow = false;
//     shadowLight.shadow.camera.left = -400;
//     shadowLight.shadow.camera.right = 400;
//     shadowLight.shadow.camera.top = 400;
//     shadowLight.shadow.camera.bottom = -400;
//     shadowLight.shadow.camera.near = 1;
//     shadowLight.shadow.camera.far = 2000;
//     shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;
//
//     scene.add(globalLight);
//     scene.add(shadowLight);
// }

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

function initUI() {
    fieldDistance = document.getElementById("distValue");
  }

function render() {

    requestAnimationFrame(render);
    renderer.render(scene, camera);
    initUI();
}

render();
