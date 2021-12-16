import "./App.css";
import PageStructure from "./components/PageStructure.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  function countController(value, product) {
    if (value === 1) setCount(count + 1);
    else if (value === 2) setCount(count - 1);
    else if (value === 3) setCount(count - product["count"]);
  }
  function cartItemController(newProduct, value) {
    if (value === 1) {
      const foundProduct = cartItem.filter((item) => {
        return item["_id"] === newProduct["_id"];
      });
      if (foundProduct.length === 0) {
        newProduct["count"] = 1;
        setCartItem((prevState) => {
          return [...prevState, newProduct];
        });
      } else {
        for (let i = 0; i < cartItem.length; i++) {
          const element = cartItem[i];
          if (element["_id"] === newProduct["_id"]) {
            cartItem[i]["count"] = cartItem[i]["count"] + 1;
            break;
          }
        }

        setCartItem(cartItem);
      }
    } else if (value === 2) {
      for (let i = 0; i < cartItem.length; i++) {
        const element = cartItem[i];
        if (element["_id"] === newProduct["_id"]) {
          cartItem[i]["count"] = cartItem[i]["count"] - 1;
          if (cartItem[i]["count"] === 0) {
            cartItem.splice(i, 1);
          }

          setCartItem(cartItem);
          break;
        }
      }
    } else if (value === 3) {
      for (let i = 0; i < cartItem.length; i++) {
        const element = cartItem[i];
        if (element["_id"] === newProduct["_id"]) {
          cartItem.splice(i, 1);
          setCartItem(cartItem);
          break;
        }
      }
    }
  }

  return (
    <div className="App">
      <PageStructure
        count={count}
        cartItem={cartItem}
        countController={countController}
        cartItemController={cartItemController}
      />
    </div>
  );
}

export default App;
