import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id && item.selectedSize === product.selectedSize );

    if (!exists) {
      setCart([...cart, product]);
    } else {
      alert("Product already in cart!");
    }
  };

  const removeFromCart = (id, selectedSize) => {
    setCart(cart.filter((item) => !(item.id === id && item.selectedSize === selectedSize)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
