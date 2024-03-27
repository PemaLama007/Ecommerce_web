import React from 'react'
import './hero.css'

import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
import hero from '../../assets/hero.svg'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <p>Summer Collection</p>
           <button>Shop Now</button>

        </div>
        <div className="hero-right">
        <img src={hero} />
        </div>
    </div>
  )
}

export default Hero