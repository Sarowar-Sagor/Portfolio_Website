import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section style={{ textAlign: 'center'}}>
      <h1>
        {/* Hi, I'm [Your Name], a{' '} */}
        <TypeAnimation
          sequence={[
            'Front-End Developer', // Types 'Front-End Developer'
            1500, // Waits 1.5 seconds
            'Full-Stack Developer', // Deletes 'Front-End Developer', then types 'Full-Stack Developer'
            1500, // Waits 1.5 seconds
            () => {
              // Optional: Callback after each complete sequence iteration
              console.log('Sequence completed');
            }
          ]}
          wrapper="span" // Can be a "p", "div", or any HTML element. Used for styling.
          cursor={true} // Show a blinking cursor
          repeat={Infinity} // Repeat the sequence indefinitely
          speed={50} // Typing speed (lower number = faster)
          style={{ fontSize: '1em', display: 'inline-block', color: '#0070f3' }} // Example styling
        />
      </h1>
      {/* <p>Building beautiful and functional web applications.</p> */}
      {/* Add more portfolio content here */}
    </section>
  );
};

export default HeroSection;