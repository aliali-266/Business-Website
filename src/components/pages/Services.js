import React from 'react';
import '../../App.css';
import CardItem from "../CardItem";


 function Services() {
  return (
  <>

  <h1 className='services'>SERVICES</h1>

  <ul className="individual-card">
<li className='service-one'>
<CardItem
              src='images/recycle-batteries.jpg'
              text='Recycle Any Unwanted Or Dead Batteries Safely'
              label='Service'
              path='/services'
            />
</li>
<li className='service-two'>
<CardItem
              src='images/replace.jpeg'
              text='Trade In Dead Or Unwanted Batteries For A Discount On A New One! '
              label='Service'
              path='/services'
            />
</li>
<li className='service-three'>
<CardItem
              src='images/pickup.jpeg'
              text='Have Us Come Pick Up Your Dead & Unwanted Batteries From Your Home Free Of Charge!!'
              label='Service'
              path='/services'
            />
</li>
<div className="call-us">

         <h2>CALL US FOR PRICING AND SALE:</h2>
      </div>
  </ul>


  </>


  )

}

export default Services
