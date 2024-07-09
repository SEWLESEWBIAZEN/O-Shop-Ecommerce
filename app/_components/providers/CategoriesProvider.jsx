'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';



// Initialize context with default values
const FilteringTextContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [text, setText] = useState("");

    return (
        <FilteringTextContext.Provider value={{ text, setText }}>
            {children}
        </FilteringTextContext.Provider>
    );
};


export function useFilteringContext() {
    return useContext(FilteringTextContext);
}
