import Lottie from 'lottie-react'
import devAnimation from '../../animation/pills/Yours.json'
import { useRef } from 'react'
import './hero.css'

function Hero() {
  const lottieRef = useRef()
  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src='./budgiX.svg' className="logo" alt="budgiX logo" />
        </a>
      </div>
      <h1 className='title'>
        The distro build to be Fast
        <span className='right-section animation '>
          <Lottie
            lottieRef={lottieRef}
            className='pill-animation'
            onLoadedImages={() => {
              lottieRef.current.setSpeed(0.5)
            }}
            animationData={devAnimation}
          />
        </span>
      </h1>
      <button>Download</button>
      <h3>I want to know more</h3>

    </>
  )
}

export default Hero
