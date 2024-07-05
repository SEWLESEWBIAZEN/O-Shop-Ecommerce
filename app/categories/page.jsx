import React from 'react'
import Categories from '../_components/Categories'
import { AiOutlineArrowRight } from 'react-icons/ai'
import React from 'react'

export const metadata = {
  title: "O-Shop | Select Your Categories",
  icons: {
    icon: '/favicon.ico',
  },
  description: "An Online shop that you can order the product you want to purchase, and it is an online show room. Find bunch of categories from which your best is included",
};



const Page = () => {
  return (
    <div className='py-10 '>
      <div className='container'>
        <div className='flex flex-row justify-between'>
          <h1 className='font-semibold'>TOP RATED CATEGORIES</h1>
          <div className='flex flex-row place-items-center text-gray-400 gap-2 cursor-pointer hover:text-[var(--primary-color)]'>
            <h1 className='font-semibold '>See All </h1>
            <AiOutlineArrowRight
              size={20}
              className='hover:w-6 hover:h-6 ' />
          </div>
        </div>
        <div className='text-center '>
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default Page