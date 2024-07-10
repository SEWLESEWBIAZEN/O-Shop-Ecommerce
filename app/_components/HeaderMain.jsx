'use client'

import { BiSolidShoppingBag } from 'react-icons/bi'
import { BsSearch, BsHeart } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { useFilteringContext } from './providers/CategoriesProvider'
import { useCartContext, useFavoriteContext } from './providers/CartProvider'
import Link from 'next/link'




const Page = () => {

  const { text, setText } = useFilteringContext();
  const { cartItems } = useCartContext();
  const { favoriteItems } = useFavoriteContext();

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
            <Link href="/categories/favorite"><BsHeart className='w-6 h-6 icon' /></Link>
            <div className=' rounded-full z-40 grid place-items-center text-[var(--primary-color)] font-bold text-[12px] bg-white text-bold'><b>{favoriteItems.length}</b></div>
          </div>
          <div className='flex flex-col items-center -space-y-11 '>
            <Link href="/categories/cart"> <BiSolidShoppingBag className='w-6 h-6 icon' /></Link>
            <div className=' rounded-full z-40 grid place-items-center text-[var(--primary-color)] font-bold text-[12px] bg-white text-bold'><b>{cartItems.length}</b></div>
          </div>
        </div>

      </div>


    </div>

  )
}

export default Page