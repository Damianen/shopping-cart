import { useState } from "react";

import "./App.css";
import githubLogo from "./assets/github-logo.svg";
import Cart from "./components/cart/Cart";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const removeFromCart = (item) => {
    let arr = cart;
    arr.splice(cart.indexOf(item), 1);
    setCart([...arr]);
  }

  return (
    <>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('shop')}>Shop</button>
        <button onClick={() => setPage('cart')}>Cart {cart.length ? '(' + cart.length + ')' : ''}</button>
      </nav>
      <main>
        {page === 'home' ? 
        <Home/> : page === 'shop' ? 
        <Shop addToCart={addToCart}/> :
        <Cart items={cart} removeFromCart={removeFromCart}/>}
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
