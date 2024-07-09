'use client'
import React, { useState, useEffect } from 'react'
import Categories from '../_components/Categories'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useFilteringContext } from './CategoriesProvider'
import { recentlyAdded } from '../_data/categories'

const RecentlyAdded = () => {
    const { text } = useFilteringContext();
    const [filteredCategories, setFilteredCategories] = useState(recentlyAdded);

    useEffect(() => {
        const newFilteredCategories = recentlyAdded.filter((category) =>
            category.title.toLowerCase().includes(text.toLowerCase()) ||
            category.desc.toLowerCase().includes(text.toLowerCase())


        );
        setFilteredCategories(newFilteredCategories);
    }, [text]);
    return (
        <div className="container bg-gray-100 rounded-2xl py-2">
            <div className="flex flex-row justify-between py-2">
                <h1 className="font-semibold">RECENTLY ADDED CATEGORIES</h1>
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

export default RecentlyAdded