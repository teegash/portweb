import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React from 'react';
import { useCallback } from 'react';

// Finally fixed it, the process of some of the trial and error code is down there
export default function App(ParticlesContainer) {
  const particlesInit = async (engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };

  return (
    <div className="App">
      {/* <h1>Hello Coders!</h1> */}

       <Particles
       className='w-full h-full absolute'
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            // "zIndex": 1
        },
        "background": {
          "color": {
            "value": "",
          },
        },
        "fpsLimit": 120,
         "interactivity": {
          "events": {
           "onClick": {
            "enable": false,
            "mode": 'push',     
          },
          "onHover": {
            "enable": true,
            "mode": 'repulse',
          },
          "resize": true,
         },
         "modes": {
          "push": {
            "quantity": 90,
          },
          "repulse": {
            "distance": 100,
            "duration": 0.4,
          },
         },
        },
        "particles": {
               "color": {
                    "value": '#e68e2e',
                  },
                  "links":{
                    "color": '#f5d393',
                    "distance": 150,
                    "enable": true,
                    "opacity": 0.4,
                    "width": 1,
                  },
                  "collisions": {
                    "enable": true,
                  },
                  "move": {
                    "direction": 'none',
                    "enable": true,
                    "outModes": {
                      "default": 'bounce',
                    },
                    "random": false,
                    "speed": 1,
                    "straight": false,
                  },
                  "number": {
                    "density": {
                      "enable": true,
                      "area": 800,
                    },
                    "value": 80,
                  },
                  "opacity": {
                    "value": 0.5,
                  },
                  "shape": {
                    "type": 'circle',
                  },
                  "size": {
                    "value": {min: 1, max: 5},
                  },
                },
                "detectRetina": true,
        // "particles": {
        //     "number": {
        //         "value": 10,
        //         "density": {
        //             "enable": false,
        //             "value_area": 800
        //         }
        //     },
        //     "color": {
        //         "value": "#fff"
        //     },
        //     "shape": {
        //         "type": "star",
        //         "options": {
        //             "sides": 5
        //         }
        //     },
        //     "opacity": {
        //         "value": 0.8,
        //         "random": false,
        //         "anim": {
        //             "enable": false,
        //             "speed": 1,
        //             "opacity_min": 0.1,
        //             "sync": false
        //         }
        //     },
        //     "size": {
        //         "value": 4,
        //         "random": false,
        //         "anim": {
        //             "enable": false,
        //             "speed": 40,
        //             "size_min": 0.1,
        //             "sync": false
        //         }
        //     },
        //     "rotate": {
        //         "value": 0,
        //         "random": true,
        //         "direction": "clockwise",
        //         "animation": {
        //             "enable": true,
        //             "speed": 5,
        //             "sync": false
        //         }
        //     },
        //     "line_linked": {
        //         "enable": true,
        //         "distance": 600,
        //         "color": "#ffffff",
        //         "opacity": 0.4,
        //         "width": 2
        //     },
        //     "move": {
        //         "enable": true,
        //         "speed": 2,
        //         "direction": "none",
        //         "random": false,
        //         "straight": false,
        //         "out_mode": "out",
        //         "attract": {
        //             "enable": false,
        //             "rotateX": 600,
        //             "rotateY": 1200
        //         }
        //     }
        // },
        // "interactivity": {
        //     "events": {
        //         "onhover": {
        //             "enable": true,
        //             "mode": ["grab"]
        //         },
        //         "onclick": {
        //             "enable": false,
        //             "mode": "bubble"
        //         },
        //         "resize": true
        //     },
        //     "modes": {
        //         "grab": {
        //             "distance": 400,
        //             "line_linked": {
        //                 "opacity": 1
        //             }
        //         },
        //         "bubble": {
        //             "distance": 400,
        //             "size": 40,
        //             "duration": 2,
        //             "opacity": 8,
        //             "speed": 3
        //         },
        //         "repulse": {
        //             "distance": 200
        //         },
        //         "push": {
        //             "particles_nb": 4
        //         },
        //         "remove": {
        //             "particles_nb": 2
        //         }
        //     }
        // },
        // "retina_detect": true,
        // "background": {
        //     "color": "#111",
        //     "image": "",
        //     "position": "50% 50%",
        //     "repeat": "no-repeat",
        //     "size": "cover"
        // }
    }}
    />
    </div>
  );
}




// const ParticlesContainer = () => {

//   const particlesInit = 
  
//   useCallback(async (engine) => {
//     console.log(engine); 
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async () => {}, []);

//   return (
//     <Particles 
//     className='w-full h-full absolute'
//     id='tsparticles'
//     init={particlesInit}
//     loaded={particlesLoaded}
//     options={{
//       fullScreen: {
//         enable: false
//       },
//       background: {
//         color: {
//           value: '',
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: false,
//             mode: 'push',     
//           },
//           onHover: {
//             enable: true,
//             mode: 'repulse',
//           },
//           resize: true,
//         },
//         modes: {
//           push: {
//             quantity: 90,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: '#e68e2e',
//         },
//         links:{
//           color: '#f5d393',
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         collisions: {
//           enable: true,
//         },
//         move: {
//           direction: 'none',
//           enable: true,
//           outModes: {
//             default: 'bounce',
//           },
//           random: false,
//           speed: 1,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//             area: 800,
//           },
//           value: 80,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: 'circle',
//         },
//         size: {
//           value: {min: 1, max: 5},
//         },
//       },
//       detectRetina: true,
//     }}
//     />
    
//   );
// };

// export default ParticlesContainer;
