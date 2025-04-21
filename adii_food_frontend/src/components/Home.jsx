import React from 'react'
import videoBg from '../assets/bakeryvideo1.mp4';

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        {/* Video Background */}
        <video autoPlay loop muted playsInline className='background-video'>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content on top of video */}
        <div className='content'>
          <h3>Your <span>Red Room</span> for cake</h3>
          <p>Order custom cakes & cupcakes online.
          Pick up at your local Walmart Bakery.</p>
          <a href='#' className='btn'>Order now</a>
        </div>
      </section>
    </>
  );
}

export default Home;
