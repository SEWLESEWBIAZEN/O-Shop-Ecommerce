
'use client'
import Categories from '@/app/_components/Categories';
import { useFavoriteContext } from '@/app/_components/providers/CartProvider'
import React from 'react'


const FavoriteCategories = () => {
    const { favoriteItems } = useFavoriteContext();
    return (
        <div className='flex flex-col'>
            <h1 className='text-center my-2'>Here are your FAVORITE Categories</h1>
            <Categories categories={favoriteItems} />
        </div>
    )
}

export default FavoriteCategories