import React, { useState, useEffect } from "react";

import Product from "./Product";
import Carousel from "./Carousel";
import "./styles/Home.css";
import axios from "./axios";

function Home(props) {
  const [products, setProducts] = useState([]);
  const { countMonitor, cartItemMonitor } = props;
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("");
      setProducts(req.data);
    }
    fetchData();
  }, []);
  return (
    <div className="products">
      {/* <Carousel /> */}
      <div className="container">
        <div className="product-items">
          {products.length !== 0 &&
            products.map((product) => {
              return (
                <Product
                  id={product["_id"]}
                  title={product["name"]}
                  price={product["price"]}
                  image="https://ntg-catalog.imgix.net/products/6887295_nocolor_0.jpg?w=1200&h=1443&sfrm=jpg&fit=crop"
                  key={product["_id"]}
                  product={product}
                  countMonitor={countMonitor}
                  cartItemMonitor={cartItemMonitor}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
