import "./styles/Checkout.css";
function Checkoutp(props) {
  let sum = 0;
  const { cartItem, count, countMonitor, cartItemMonitor } = props;
  function addProduct(product) {
    cartItemMonitor(product, 1);
    countMonitor(1);
  }
  function reduceProduct(product) {
    cartItemMonitor(product, 2);
    countMonitor(2);
  }
  function deleteProduct(product) {
    cartItemMonitor(product, 3);
    countMonitor(3, product);
  }
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
        items
      })
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  }
  return (
    <div className="checkoutPage">
      <div className="cartContainer">
        <div class="Header">
          <h3 class="Heading">Shopping Cart</h3>
        </div>
        {cartItem.length === 0 ? (
          <h3>Cart is Empty</h3>
        ) : (
          <div>
            {cartItem.map((cart) => {
              sum = sum + cart["count"] * cart["price"];
              return (
                <div class="Cart-Items">
                  <div class="image-box">
                    <img
                      src={cart["imgeUrl"]}
                      alt="product"
                      style={{ height: "120px" }}
                    />
                  </div>
                  <div class="about">
                    <h1 class="title">{cart["name"]}</h1>
                    <h3 class="subtitle">Rs. {cart["price"]}</h3>
                  </div>
                  <div class="counter">
                    <div class="btn" onClick={() => addProduct(cart)}>
                      +
                    </div>
                    <div class="count">{cart["count"]}</div>
                    <div class="btn" onClick={() => reduceProduct(cart)}>
                      -
                    </div>
                  </div>
                  <div class="prices">
                    <div class="amount">{cart["price"] * cart["count"]}</div>
                    <div
                      class="remove"
                      onClick={() => {
                        return deleteProduct(cart);
                      }}
                    >
                      <u>Remove</u>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr />

            <div class="checkout">
              <div class="total">
                <div>
                  <div class="Subtotal">Sub-Total</div>
                  <div class="items">{count} items</div>
                </div>
                <div class="total-amount">{sum}</div>
              </div>
              <button class="button" onClick={paymentPage}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkoutp;
