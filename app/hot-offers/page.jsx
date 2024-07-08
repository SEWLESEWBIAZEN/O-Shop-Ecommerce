import React from 'react'
import Categories from '../_components/Categories'
import { categoriesWithDiscount } from '../_data/categories'

const HotOffers = () => {
    return (
        <div className='py-5'>
            <Categories categories={categoriesWithDiscount} />
        </div>
    )
}

export default HotOffers