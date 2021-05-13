import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from "react-particles-js"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  particlesCanva:{
    position:"absolute",
    opacity:"0.5"
  }
})
const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 250,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#e6e773', '#73e77c', '#737fe7', '#8b008b', '#da1d81'],
            },
            shape: {
              type: ['circle', 'triangle', 'star', 'polygon'],
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 1,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: true,
              },
            },
            size: {
              value: 12,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              rempve: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
          config_demo: {
            hide_card: false,
            background_color: '#b61924',
            background_image: '',
            background_position: '50% 50%',
            background_repeat: 'no-repeat',
            background_size: 'cover',
          },
        }}
      />
    </>
  )
}

export default Home
