import React from 'react';
import './NewsLetter.css'; // Make sure this file exists and has styles

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers In Your Email</h1>
        <p>Subscribe to our newsletter and stay updated on the latest offers and products.</p>
        <div >
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>

       </div>
    </div>
  );
}

export default NewsLetter;
