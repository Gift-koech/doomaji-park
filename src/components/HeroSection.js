import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/Tri_Particles_4K_Motion_Background_Loop.mp4' autoPlay loop muted />
      <h2>ADVENTURE AWAITS</h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
     
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
