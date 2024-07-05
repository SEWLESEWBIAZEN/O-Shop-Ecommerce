
import React from 'react'
import { Incomingcategories } from '../_data/categories'
import Categories from '../_components/Categories'
import { AiOutlineArrowRight } from 'react-icons/ai'
const FutureIncomings = () => {
    return (
        <div className="container bg-green-50 rounded-2xl py-2">
            <div className="flex flex-row justify-between py-2">
                <h1 className="font-semibold"> INCOMING CATEGORIES IN FUTURE</h1>
                <div className="flex flex-row place-items-center text-gray-400 gap-2 cursor-pointer hover:text-[var(--primary-color)]">
                    <h1 className="font-semibold ">See All </h1>
                    <AiOutlineArrowRight size={20} className="hover:w-6 hover:h-6 " />
                </div>
            </div>
            <div className="text-center ">
                <Categories categories={Incomingcategories} />
            </div>
        </div>

    )
}

export default FutureIncomings