import React from "react";
import Cards from "./Cards";
import './Rides.css'


function rides() {
  return (
    <div className='cards'>
      <h1>Check out these Epic holiday categories!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Cards
              src='/assets/marineholiday.jpg'
              text=''
              label='Marine Tours'
             
            />
            <Cards
              src='/assets/elephantinpond.jpg'
              text=''
              label='Savannah safari'
           
            />
          </ul>
          <ul className='cards__items'>
            <Cards
              src='/assets/amazon.jpg'
              text=''
              label='Amazon Tour'
           
            />
           
            <Cards
              src='/assets/deserttour.jpg'
              text=' '
              label='Deserts n Outbacks'
              
            />
         
          </ul>
        </div>
      </div>
    </div>
  );
}

export default rides;