import React, { Fragment, useState } from "react";

import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
