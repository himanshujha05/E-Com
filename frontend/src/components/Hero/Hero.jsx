import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styling
import hand_icon from '../../assets/hand_icon.png'; // Adjust the path as necessary
import arrow_icon from '../../assets/arrow.png';
import hero_image from '../../assets/hero_image.png'; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />

      </div>
    </div>
  )
}

export default Hero
