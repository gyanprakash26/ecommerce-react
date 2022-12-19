import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/Cart/Cart";
import Sdata from "./components/shops/Sdata";
import Detail from "./components/shops/Detail";
function App() {
  const { shopItems } = Sdata;
  const [CartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
          <Route path="/" exact>
            <Pages 
              addToCart={addToCart} 
              shopItems={shopItems} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route path="/detail" exact>
            <Detail 
              addToCart={addToCart} 
              shopItems={shopItems} />
          </Route>
      </Router>
    </>
  );
}

export default App;
