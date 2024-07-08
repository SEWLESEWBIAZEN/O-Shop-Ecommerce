import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../_data/products'

const Products = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4' >New Products</h2>
        <div className=' grid grid-cols-1 place-items-center  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 flex justify-between'>

          {products.map((product,index) => {
            return (
              <ProductCard
                key={index}
                img={product.img}
                title={product.title}
                desc={product.desc}
                rating={product.rating}
                price={product.price}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products