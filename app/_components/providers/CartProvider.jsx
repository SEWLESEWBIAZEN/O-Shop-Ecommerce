'use client';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartAmount, setCartAmount] = useState(0);
    const [cartItems, setCartItems] = useState([])

    return (
        <CartContext.Provider value={{ cartAmount, setCartAmount, cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);


const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favoriteAmount, setFavoriteAmount] = useState(0);
    const [favoriteItems, setFavoriteItems] = useState([])


    return (
        <FavoriteContext.Provider value={{ favoriteAmount, setFavoriteAmount, favoriteItems, setFavoriteItems }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavoriteContext = () => useContext(FavoriteContext);

