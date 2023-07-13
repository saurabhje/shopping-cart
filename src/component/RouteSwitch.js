import React, { useState , useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import ShopPage from "./shoppage";
import Cart from "./cartpage";
import Footer from "./footer";
import Header from "./header";
import "./RouteSwitch.css";

function RouteSwitcher() {
  const [cart, setCart] = useState([]);
  const [itemCount, setitemCount] = useState(0);
  const [bill, setBill] = useState(0);


  useEffect(() => {
    setBill(calculateTotalBill(cart));
  }, [cart]);

  const AddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      return;
    }
    setCart((prevState) => [...prevState, { ...product, count: 1 }]);
  };
  

  const increaseCart = (index) => {
    const updatedItems = [...cart];
    if (updatedItems[index]) {
      updatedItems[index].count += 1;
      setCart(updatedItems);
    }
  };
  

  const decreaseCart = (index) => {
    const updatedItems = [...cart];
    if (updatedItems[index]) {
      updatedItems[index].count -= 1;
      if (updatedItems[index].count === 0) {
        updatedItems.splice(index, 1);
      }
      setCart(updatedItems);
    }
  };

  const calculateTotalBill = (cart) => {
    console.log(cart);
    let totalBill = 0;
    cart.forEach((element) => {
      totalBill += element.price * element.count;
    });

    return totalBill.toFixed(2);
  };


  return (
    <div className="content">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shoppage"
            element={<ShopPage onCartAction={AddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} bill ={bill} decreaseCart={decreaseCart} increaseCart={increaseCart} itemCount={itemCount}/>}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default RouteSwitcher;
