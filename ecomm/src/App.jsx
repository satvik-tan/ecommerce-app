// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <div className="new">
        <nav>
          <Link to="/">Saturn.com</Link>
          <Link to="/products">Browse</Link>
          <span>Signup</span>
          <span>About</span>
          <span>Seller</span>
          <Link to="/checkout" style={{float: 'right'}}>Cart ({cart.length})</Link>
        </nav>

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;