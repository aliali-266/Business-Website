import React from 'react';
import '../../App.css';
import CardItem from "../CardItem";


 function SignUp() {
  return (
<>

  <h1 className='sign-up'>JOIN US</h1>

  <ul className="individual-card">


  <CardItem
              src='images/img-6.jpg'
              text='Sign-Up For Our Newsletter And Stay Up To Date On New Services And Discounts!'
              label='Info'
              path='/sign-up'
            />
      <div className="call-us">



         {/* <h2>CALL US FOR PRICING AND SALE:</h2> */}
      </div>
</ul>


</>



  )
}

export default SignUp
