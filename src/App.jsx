import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./home";
import Product from "./product";

import Cart from "./addcart";
import Single from "./single";
import Buy from "./bynow";
import {  Contextfuntion } from "./appcontext";

function App() {
  return (
    <BrowserRouter>
      <Contextfuntion>
      <Routes>
  
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:elementid/:elementname" element={<Single />} />
          <Route path="/buy"  element={<Buy/>}  />
        
      </Routes>
          </Contextfuntion>
    </BrowserRouter>
  );
}

export default App;
