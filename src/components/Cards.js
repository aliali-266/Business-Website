import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Your Options And Services Available</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/recycle-batteries.jpg'
              text='Recycle Any Unwanted Or Dead Batteries Safely'
              label='Service'
              path='/services'
            />
            <CardItem
              src='images/replace.jpeg'
              text='Trade In Dead Or Unwanted Batteries For A Discount On A New One! '
              label='Service'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pickup.jpeg'
              text='Have Us Come Pick Up Your Dead & Unwanted Batteries From Your Home Free Of Charge!!'
              label='Service'
              path='/services'
            />
            <CardItem
              src='images/New.jpeg'
              text='Buy Top Of The Line New Batteries At A Great Price/ Satisfaction Guaranteed'
              label='Service'
              path='/products'
            />
            <CardItem
              src='images/signup.jpeg'
              text='Sign-Up For Our Newsletter And Stay Up To Date On New Services And Discounts!'
              label='Info'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
