import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Checkoutp from "./Checkoutp";
import ProductInfo from "./ProductInfo";
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
              <Checkoutp
                count={count}
                cartItem={cartItem}
                countMonitor={countController}
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
    </div>
  );
}

export default PageStructure;
