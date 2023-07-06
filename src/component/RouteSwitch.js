import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import ShopPage from "./shoppage";
import Cart from "./cartpage";
import Footer from "./footer";
import Header from "./header";

function RouteSwitcher() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppage" element={<ShopPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitcher;