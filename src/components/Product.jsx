import React from "react";
import "./styles/Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const { id, title, image, price, product } = props;
  function addProduct() {
    props.cartItemMonitor(product, true);
    props.countMonitor(true);
  }
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-img">
          <img src={image} alt="productimage" />
        </div>
        <div className="product-btns">
          <button type="button" className="btn-cart" onClick={addProduct}>
            Add to cart
          </button>
        </div>
      </div>

      <div className="product-info">
        <Link to={`/product/${id}`} className="product-name">
          {title}
        </Link>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}

export default Product;
