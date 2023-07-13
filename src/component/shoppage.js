import React from "react";
import Product from "./Product";
import gpu from "../images/4070.jpg"
import iphone from "../images/iphone.jpg";
import airpodes from '../images/airpodes.jpg';
import ipad from '../images/ipad.jpg';
import mac from "../images/mac.jpg";
import razor from "../images/razor.jpg";
import keyboard from "../images/keyboard.jpg";
import laptop from "../images/macbook.jpg";
import titanium from "../images/titanium.jpg";

const ShopPage = ({ onCartAction }) => {
  const products = [
    { id: 1, title: "Mac", price: 1000, img: mac },
    {id: 2, title: "GPU", price: 900 , img: gpu},
    {id: 3, title: "IPhone", price: 1200, img: iphone},
    {id: 4, title: "Airpodes", price: 200 , img: airpodes},
    {id: 5, title: "IPad", price: 1000, img: ipad},
    {id: 6, title: "Mouse", price: 100 , img: razor},
    {id: 7, title: "Keyboard", price: 200 , img: keyboard},
    {id: 8, title: "Laptop", price: 1000, img: laptop},
    {id: 9, title: "Watch", price: 700 , img: titanium},
  ];

  return (
    <div>
      <div className="card-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onCartAction={onCartAction}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
