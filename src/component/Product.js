import React from "react";
import "./Product.css";

const Product = ({ product, onCartAction }) => {
  const handleCartAction = () => {
    onCartAction(product);
  };

  return (
    <div className="product-card">
      <h1 className="product-title">{product.title}</h1>
      <img className="product-img" src={product.img} alt="product" />
      <p className="product-price">${product.price}</p>
      <button className="button-4" onClick={handleCartAction}>
         Add to Cart
      </button>
    </div>
  );
};

export default Product;