import "./App.css";
import PageStructure from "./components/PageStructure.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  function countController(value) {
    if (value === true) setCount(count + 1);
    else setCount(count - 1);
  }
  function cartItemController(newProduct, value) {
    if (value === true) {
      const foundProduct = cartItem.filter((item) => {
        console.log(item["_id"]);
        console.log(newProduct["_id"]);
        return item["_id"] === newProduct["_id"];
      });
      console.log(foundProduct.length);
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
        console.log(cartItem);
        setCartItem(cartItem);
      }
    } else {
      for (let i = 0; i < cartItem.length; i++) {
        const element = cartItem[i];
        if (element["_id"] === newProduct["_id"]) {
          cartItem[i]["count"] = cartItem[i]["count"] - 1;
          if (cartItem[i]["count"] === 0) cartItem.splice(i, 1);
          setCartItem(cartItem);
          break;
        } else {
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
