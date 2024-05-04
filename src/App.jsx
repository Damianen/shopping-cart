import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import githubLogo from "./assets/github-logo.svg";
import Cart from "./components/cart/Cart";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/shop",
      element: <Shop addToCart={addToCart}/>
    },
    {
      path: "/cart",
      element: <Cart cart={cart}/>
    }
  ]);

  return (
    <>
      <nav>
        <a href="/"><button>Home</button></a>
        <a href="shop"><button>Shop</button></a>
        <a href="cart"><button>Cart</button></a>
      </nav>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>
        <p>Copyright © Damian Buskens </p>
        <a href="https://github.com/Damianen">
          <button>
            <img src={githubLogo} height={20} width={20}/>
          </button>
        </a>
      </footer>
    </>
  );
}

export default App;
