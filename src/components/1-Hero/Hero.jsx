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
      <h1>The distro build to be Fast</h1>
      <button>Download</button>
      <span>I want to know more</span>
      <div className='right-section animation '>
        <Lottie
          lottieRef={lottieRef}
          className=''
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5)
          }}
          animationData={devAnimation}
        />
      </div>
    </>
  )
}

export default Hero
