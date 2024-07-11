import React from 'react'
import CategoryCard from './CategoryCard'


const Categories = ({ categories }) => {
  return (
    <div className='container grid grid-cols-1 lg:grid-cols-2 lg:gap-[40px] gap-10 md:gap-3 mb-10'>
      {categories.map((category, index) => {
        return (
          <CategoryCard
            key={index}
            id={category.id}
            title={category.title}
            desc={category.desc}
            img={category.img}
            priceHint={category.priceHint}
            fav={category.fav}
            discount={category.discount}
            quantity={category.quantity}
          />
        )
      })}
    </div>
  )
}

export default Categories