import React from "react";
import Product from "./Product";
import gpu from "../images/4070.jpg"
import iphone from "../images/iphone.jpg";
import moduleName from '../images/airpodes.jpg';
import ipad from '../images/ipad.jpg';
import mac from "../images/mac.jpg";

const ShopPage = () =>{
    return (
        <div>
            <div className="card-container">
                <p> This is the shopPage</p>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ShopPage;