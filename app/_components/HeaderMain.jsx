'use client'

import { BiSolidShoppingBag } from 'react-icons/bi'
import { BsSearch, BsHeart } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { useFilteringContext } from './CategoriesProvider'

const Page = () => {
  const { text, setText } = useFilteringContext();
  return (
    <div className='px-3 py-5 border-b border-gray-300'>
      <div className='container flex flex-row justify-between items-center' >
        <div className='text-[20px] hidden sm:block'><b>O-shop</b></div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative flex flex-row items-center -space-x-7'>
          <input
            type='text'
            className='w-full border border-gray-200 p-2 px-4 rounded-lg '
            placeholder='Enter any product name....'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <BsSearch
            size={25}
            className='text-gray-400 icon' />
        </div>
        <div className='hidden sm:flex  gap-3 '>
          <div>
            <FiUser className='w-6 h-6 icon' />
          </div>
          <div className='flex flex-col items-center -space-y-11 '>
            <BsHeart className='w-6 h-6 icon' />
            <div className='px-[6px] rounded-full z-40 grid place-items-center bg-[var(--primary-color)] text-white text-bold'><b>4</b></div>
          </div>
          <div className='flex flex-col items-center -space-y-11 '>
            <BiSolidShoppingBag className='w-6 h-6 icon' />
            <div className='px-[6px] rounded-full z-40 grid place-items-center bg-[var(--primary-color)] text-white text-bold'><b>4</b></div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Page