import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Checkout from "./Checkout";
import ProductInfo from "./ProductInfo";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function PageStructure(props) {
  const { count, cartItem, countController, cartItemController } = props;
  return (
    <div>
      <Router>
        <Header count={count} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countMonitor={countController}
                cartItemMonitor={cartItemController}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItem={cartItem}
                cartItemMonitor={cartItemController}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route
            path="/product/:productInfo"
            element={
              <ProductInfo
                cartItemMonitor={cartItemController}
                countMonitor={countController}
              />
            }
          />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default PageStructure;
