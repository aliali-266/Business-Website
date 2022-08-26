import React from "react";
import "../../App.css";
import CardItem from "../CardItem";

function Products() {
  return (
    <>
      <h1 className="products">PRODUCTS</h1>



<ul className="individual-card">


      <CardItem
        src="images/New.jpeg"
        text="Buy Top Of The Line New Batteries At A Great Price/ Satisfaction Guaranteed"
        label="Product"
        path="/products"
      />
      <div className="call-us">

         <h2>CALL US FOR PRICING AND SALE:</h2>
      </div>
</ul>


    </>
  );
}

export default Products;
