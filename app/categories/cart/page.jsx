'use client'
import Categories from '@/app/_components/Categories';
import { useCartContext } from '@/app/_components/providers/CartProvider'
import React from 'react'


const Cart = () => {
    const { cartItems } = useCartContext();
    return (
        <div className='flex flex-col'>
            <h1 className='text-center my-2'>Here are your CART Items</h1>
            <Categories categories={cartItems} />
        </div>

    )
}

export default Cart