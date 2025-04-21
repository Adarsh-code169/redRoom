import React from 'react';
import aboutImg from '../assets/chocolava-cake.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">ABOUT <span>US</span></h2>
      

      <div className="about-row">
        <div className="about-img">
          <img src={aboutImg} alt="cake" />
        </div>

        <div className="about-content">
          <h3>What Makes Our Cakes Special?</h3>
          <p>
            We bake our cakes with love, using fresh ingredients and secret recipes passed down through generations. The rich chocolate, the perfect texture, and that molten center—pure magic!
          </p>
          <p>
            From birthdays to late-night cravings, our cakes are crafted to create unforgettable moments. Dive into indulgence, one bite at a time.
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
