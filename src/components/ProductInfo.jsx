import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "./axios";
import "./styles/ProductInfo.css";

function ProductInfo(props) {
  const [product, setProduct] = useState({});
  const { productInfo } = useParams();
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`product/${productInfo}`);
      setProduct(req.data);
    }
    fetchData();
  }, []);
  function addProduct() {
    console.log(product);
    props.cartItemMonitor(product, true);
    props.countMonitor(true);
  }
  return (
    <div>
      {Object.keys(product).length !== 0 && (
        <div className="hero">
          <div className="row">
            <div className="col">
              <div className="slider">
                <div className="product"></div>
                <div className="preview">
                  <img
                    src="https://ntg-catalog.imgix.net/products/6887295_nocolor_0.jpg?w=1200&h=1443&sfrm=jpg&fit=crop"
                    id="imagebox"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <h2>{product["name"]}</h2>

                <button type="button" onClick={addProduct}>
                  <p>₹{product["price"]}</p>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
