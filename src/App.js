import React, { useState } from "react";

import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
