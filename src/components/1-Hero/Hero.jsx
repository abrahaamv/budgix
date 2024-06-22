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
      <div className="hero-main">
        <img src='./budgiX.svg' className="logo" alt="budgiX logo" />

        <div className="left-section">
          <h1 className='title'>
            The distro crafted to be
          </h1>
        </div>

        <div className="right-section">
          <h2 className='sub-title'>
            <span className='pill-container'>
              <Lottie
                lottieRef={lottieRef}
                className='pill-animation'
                onLoadedImages={() => {
                  lottieRef.current.setSpeed(0.3)
                }}
                animationData={fasterAnimation}
              />
            </span>
            Fast
          </h2>

          <h2 className='sub-title'>
            <span className='pill-container'>
              <Lottie
                lottieRef={lottieRef}
                className='pill-animation'
                onLoadedImages={() => {
                  lottieRef.current.setSpeed(0.3)
                }}
                animationData={saferAnimation}
              />
            </span>
            Reliable
          </h2>
          <h2 className='sub-title'>
            <span className='pill-container'>
              <Lottie
                lottieRef={lottieRef}
                className='pill-animation'
                onLoadedImages={() => {
                  lottieRef.current.setSpeed(0.3)
                }}
                animationData={yoursAnimation}
              />
            </span>
            Yours
          </h2>
        </div>
      </div>
      <div className="hero-download">
        <button>Download</button>
        <h3>I want to know more</h3>
        <Carousel />
      </div>
    </section>
  )
}

export default Hero
