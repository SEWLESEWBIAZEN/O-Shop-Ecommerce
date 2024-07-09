
'use client'
import React, { useEffect, useState } from 'react'
import { frequentlyOrdered } from '../_data/categories'
import Categories from '../_components/Categories'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useFilteringContext } from './CategoriesProvider'
const FrequentlyOrdered = () => {
    const { text } = useFilteringContext();
    const [filteredCategories, setFilteredCategories] = useState(frequentlyOrdered);
    useEffect(() => {
        const newFilteredCategories = frequentlyOrdered.filter((category) =>
            category.title.toLowerCase().includes(text.toLowerCase()) ||
            category.desc.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCategories(newFilteredCategories);

    }, [text])


    return (
        <div className="container py-2 bg-white rounded-2xl">

            <div className="flex flex-row justify-between  ">
                <h1 className="font-semibold"> FREQUENTLY ORDERED CATEGORIES</h1>
                <div className="flex flex-row place-items-center text-gray-400 gap-2 cursor-pointer hover:text-[var(--primary-color)]">
                    <h1 className="font-semibold ">See All </h1>
                    <AiOutlineArrowRight size={20} className="hover:w-6 hover:h-6 " />
                </div>
            </div>
            <div className="text-center ">
                <Categories categories={filteredCategories} />
            </div>
        </div>

    )
}

export default FrequentlyOrdered