import Lottie from 'lottie-react'
import builtAnimation from '../../animation/pills/Built.json'
import fasterAnimation from '../../animation/pills/Faster.json'
import saferAnimation from '../../animation/pills/Safer.json'
import yoursAnimation from '../../animation/pills/Yours.json'
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
              lottieRef.current.setSpeed(0.3)
            }}
            animationData={fasterAnimation}
          />
          Fast
        </span>
        <span className='pill-container'>
          <Lottie
            lottieRef={lottieRef}
            className='pill-animation'
            onLoadedImages={() => {
              lottieRef.current.setSpeed(0.3)
            }}
            animationData={saferAnimation}
          />
          Safer
        </span>
        <span className='pill-container'>
          <Lottie
            lottieRef={lottieRef}
            className='pill-animation'
            onLoadedImages={() => {
              lottieRef.current.setSpeed(0.3)
            }}
            animationData={yoursAnimation}
          />
          Yours
        </span>

      </h1>
      <button>Download</button>
      <h3>I want to know more</h3>
      <Carousel />
    </section>
  )
}

export default Hero
