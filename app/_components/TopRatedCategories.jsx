'use client'

import React from "react";
// import { categories } from "../_data/categories";
import Categories from "../_components/Categories";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useFilteringContext } from "./CategoriesProvider";

const TopRatedCategories = () => {
    const { filteredCategories } = useFilteringContext();

    return (
        <div className="container  bg-gray-100 py-2 rounded-2xl">
            <div className="flex flex-row justify-between py-2">
                <h1 className="font-semibold">TOP RATED CATEGORIES</h1>
                <div className="flex flex-row place-items-center text-gray-400 gap-2 cursor-pointer hover:text-[var(--primary-color)]">
                    <h1 className="font-semibold ">See All </h1>
                    <AiOutlineArrowRight size={20} className="hover:w-6 hover:h-6 " />
                </div>
            </div>
            <div className="text-center  bg-gray-100 py-3 rounded-2xl">
                <Categories categories={filteredCategories} />
            </div>
        </div>
    );
};

export default TopRatedCategories;
