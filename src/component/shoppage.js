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

const ShopPage = () =>{
    return (
        <div>
            <div className="card-container">
                <Product title="Mac" price="$1000" img={mac}  />
                <Product title="GPU" price="$1000" img={gpu}  />
                <Product title="Iphone" price="$700" img={iphone} />
                <Product title="Podes" price="$800" img={airpodes}  />
                <Product title="Ipad" price="$900" img={ipad} />
                <Product title="Mouse" price="$100" img={razor} />
                <Product title="Keyboard" price="$1000" img={keyboard} />
                <Product title="Laptop" price="$700" img={laptop} />
                <Product title="Titanium" price="$400" img={titanium} />
            </div>
        </div>
    )
}

export default ShopPage;