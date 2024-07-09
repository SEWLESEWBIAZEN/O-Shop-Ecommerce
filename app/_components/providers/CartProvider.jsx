'use client';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartAmount, setCartAmount] = useState(0);

    return (
        <CartContext.Provider value={{ cartAmount, setCartAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);

