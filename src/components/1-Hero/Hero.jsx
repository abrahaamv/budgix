import Lottie from 'lottie-react'
import devAnimation from '../../animation/pills/Yours.json'
import Carousel from "../1-Hero/Carousel/Carousel"
import { useRef } from 'react'
import './hero.css'

function Hero() {
  const lottieRef = useRef()
  return (
    <section className='hero flex'>
      <img src='./budgiX.svg' className="logo" alt="budgiX logo" />
      <h1 className='title'>
        The distro build to be
        <span className='pill-container'>
          <Lottie
            lottieRef={lottieRef}
            className='pill-animation'
            onLoadedImages={() => {
              lottieRef.current.setSpeed(0.5)
            }}
            animationData={devAnimation}
          />
          Fast
        </span>

      </h1>
      <button>Download</button>
      <h3>I want to know more</h3>
      <Carousel />
    </section>
  )
}

export default Hero
