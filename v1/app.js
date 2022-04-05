/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#0000ff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#00000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "30992.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 12,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 50,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 60,
        "color": "#7675de",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "top",
        "random": false,
        "straight": true,
        "out_mode": "bounce",
        "attract": {
          "enable": false,
          "rotateX": 900,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
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
          "distance": 600,
          "size": 20,
          "duration": 2,
          "opacity": 9,
          "speed": 1
        },
        "repulse": {
          "distance": 400
        },
        "push": {
          "particles_nb": 8
        },
        "remove": {
          "particles_nb": 6
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);