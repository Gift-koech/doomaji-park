import React from "react";
import Cards from "./Cards";
import './Rides.css'


function rides() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC rides!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Cards
              src='/assets/cursedwheels.jpg'
              text='Take a ride on the wheels of Terror'
              label='Heart stopper'
              path='/Ridespage'
            />
            <Cards
              src='/assets/funhouse.jpg'
              text='Join the funhouse funclub.. '
              label='Heart Stopper'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Cards
              src='/assests/devilscrib.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
           
            <Cards
              src='assets/dragontide.jpeg'
              text='Ride the dragontide wheel '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default rides;