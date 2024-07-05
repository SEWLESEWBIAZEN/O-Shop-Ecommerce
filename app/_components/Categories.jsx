import React from 'react'
import {categories} from '../_data/categories'
import CategoryCard from './CategoryCard'


const Categories = () => {
  return (   
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[40px] gap-10 md:gap-3 mb-10'>
            {categories.map((category,index)=>{
                return (
                <CategoryCard 
                key={index}
                title={category.title}
                desc={category.desc}
                img={category.img}
                priceHint={category.priceHint}
                />
            )
            })}
        </div>
   
  )
}

export default Categories