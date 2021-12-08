import React from "react";
import { Link } from "react-router-dom";
import "./styles/Checkout.css";

function Checkout(props) {
  let sum = 0;
  const { cartItem, cartItemMonitor } = props;
  function paymentPage() {
    const items = cartItem.map((item) => {
      return { id: item["_id"], quantity: item["count"] };
    });
    fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        produ: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 }
        ],
        items
      })
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        // console.log(url);
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  }
  return (
    <div className="row container" style={{ width: "50%" }}>
      <div className="container">
        <h4>
          Cart
          {/* <span className="price" style={{ color: "black" }}>
            <i className="fa fa-shopping-cart"></i>
            <b>4</b>
          </span> */}
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Product Name</th>
              <th scope="col">No.Of Product</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((cart, i) => {
              sum = sum + cart["count"] * cart["price"];
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{cart["name"]}</td>
                  <td>{cart["count"]}</td>
                  <td>{cart["count"] * cart["price"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <hr />
        <p>
          Total{" "}
          <span className="price" style={{ color: "black" }}>
            <b>Rs{sum}</b>
          </span>
        </p>
      </div>
      <button onClick={paymentPage}>Buy</button>
    </div>
  );
}

export default Checkout;
