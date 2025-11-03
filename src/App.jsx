import React from "react";
import {Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Social from "./Components/Shop/Social";
// import Socialmedia from "./Components/Socialmedia/Socialmedia";
import { CartProvider } from "./context/CartContext";
import Cart from "./Components/Shop/Cart";
 


const App = () => {


  return (
    <CartProvider>

    <div className="min-h-screen text-white bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] py-7">
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/media" element={<Socialmedia />} /> */}
        
        </Routes>         
    </div>

    </CartProvider>

  );
};

export default App;
