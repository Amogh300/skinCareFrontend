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
    props.cartItemMonitor(product, 1);
    props.countMonitor(1);
  }
  return (
    <div>
      {Object.keys(product).length !== 0 && (
        <div className="productInfo row">
          <div className="col-lg-6">
            <img src={product["imgeUrl"]} alt="product" />
          </div>
          <div className="col-lg-6  details">
            <h2>{product["name"]}</h2>
            <div>
              <h3>₹{product["price"]}</h3>
            </div>
            <button type="button" className="basket" onClick={addProduct}>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
