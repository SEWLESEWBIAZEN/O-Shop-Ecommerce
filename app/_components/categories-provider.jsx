'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { categories } from '../_data/categories';


// Initialize context with default values
const FilteringTextContext = createContext({
    text: "",
    setText: () => { },
    filteredCategories: [],
});

export const CategoriesProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [filteredCategories, setFilteredCategories] = useState(categories);

    useEffect(() => {
        const newFilteredCategories = categories.filter(category =>
            category.title.toLowerCase().includes(text.toLowerCase()) ||
            category.desc.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCategories(newFilteredCategories);
    }, [text]);

    return (
        <FilteringTextContext.Provider value={{ text, setText, filteredCategories }}>
            {children}
        </FilteringTextContext.Provider>
    );
};

export const useFilteringContext = () => useContext(FilteringTextContext);
