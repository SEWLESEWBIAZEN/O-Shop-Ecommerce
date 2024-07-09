'use client'

import React, { useEffect, useState } from 'react'
import Categories from '../../_components/Categories'
import { categoriesWithDiscount } from '../../_data/categories'
import { useFilteringContext } from '../../_components/providers/CategoriesProvider'

const HotOffers = () => {
    const { text } = useFilteringContext();
    const [filteredCategories, setFilteredCategories] = useState(categoriesWithDiscount);

    useEffect(() => {
        const newFilteredCategories = categoriesWithDiscount.filter(category =>
            category.title.toLowerCase().includes(text.toLowerCase()) ||
            category.desc.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCategories(newFilteredCategories);
    }, [text])

    return (
        <div className='py-5'>
            <Categories categories={filteredCategories} />
        </div>
    )
}

export default HotOffers