import React, { useEffect, useState } from "react";

const Cart = ({cart , bill , decreaseCart, increaseCart}) => {


  return (
    <div className="cart-items">
      {cart.map((item, index) => (
        <div className="cart" key={index}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button className="dec-button" 
          index={index} 
          onClick={()=> decreaseCart(index)}
          > 
            -
          </button>
          <span>{item.count}</span>
          <button
            className="inc-button"
            index={index}
            onClick={() => increaseCart(index)}
          >
            +
          </button>

        </div>
      ))}
      <p>Total Bill: ${bill}</p>
    </div>
  );
};

export default Cart;
