'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaThumbsUp } from 'react-icons/fa'


const CategoryCard = ({ id, img, title, desc, fav, priceHint, discount }) => {



  const [amount, SetAmount] = useState(0)

  //decrement
  const decrement = () => {
    amount > 0 && SetAmount(amount - 1)
  }


  //increment
  const increment = () => {
    amount < 100 && SetAmount(amount + 1)
  }
  //render links
  const renderLikes = () => {
    const likes = []

    for (let i = 1; i <= fav; i++) {
      likes.push(<FaThumbsUp key={i} size={12} className='text-orange-800' />)
    }


    return likes;
  }


  //rendering 5 likes

  const render5Likes = () => {
    const likes = []

    for (let i = 1; i <= 5; i++) {
      likes.push(<FaThumbsUp key={i} size={12} className='text-orange-800' />)
    }


    return likes;
  }


  //rendering 3 likes

  const render3Likes = () => {
    const likes = []

    for (let i = 1; i <= 3; i++) {
      likes.push(<FaThumbsUp key={i} size={12} className='text-orange-800' />)
    }


    return likes;
  }
  return (
    <div className='h-auto'>
      <div className={`h-full gap-1 bg-gray-50 hover:bg-white border border-gray-200 rounded-2xl ${(id % 2 !== 0) ? "sm:flex-row" : "sm:flex-row-reverse"}  flex flex-col justify-evenly items-center mx-auto p-1`}>
        <div className='flex flex-col -space-y-12 '>
          {discount &&
            <div className='w-[100px] mt-5 ps-5 font-semibold text-white -rotate-45 bg-[var(--primary-color)] -px-10'>{discount}% OFF</div>}

          <Image
            src={img}
            width={160}
            height={160}
            alt='Category image'
            className='rounded-2xl mx-auto sm:mx-0 cursor-pointer object-cover'
          />

        </div>


        <div className='flex flex-col gap-3 justify-center px-2'>
          <h1 className=' text-[var(--primary-color)]  font-semibold font-mono text-md text-sm'>{title}</h1>
          <p className='text-gray-500 max-w-[300px] text-center md:text-start text-wrap'>{desc}</p>
          <div className='flex flex-row  text-gray-500 items-center justify-between flex-wrap'>
            <div className='flex flex-row -space-x-1 gap-1 '>
              {fav <= 15 && (<span className='flex flex-row items-center gap-1 max-w-[150px] flex-wrap '>{renderLikes()}</span>)}
              {(fav > 15 && fav <= 30) && (
                <span className='flex flex-row items-center gap-1 max-w-[150px] flex-wrap'>{render5Likes()}.......</span>
              )
              }
              {fav > 30 && (
                <span className='flex flex-row items-center gap-1 max-w-[150px] flex-wrap'>{render5Likes()}.......{render3Likes()}</span>
              )
              }

            </div>
            <p className='text-[12px]'>(<span>{fav}</span>)</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-gray-500 text-opacity-65 tracking-widest'>{priceHint}</p>
            <AiOutlineArrowRight
              size={25}
              className=' text-gray-400 hover:text-[var(--primary-color)] cursor-pointer font-bold'
            />
          </div>
          <div className='flex flex-row items-center justify-between'>
            <button className='bg-blue-600 py-2 px-4 text-white rounded-md hover:bg-blue-500'>Add to Cart</button>
            <div className='flex flex-row p-2 rounded-md items-center justify-center gap-2 bg-slate-300'>
              <button onClick={decrement}><AiOutlineMinus size={25} /></button>
              <div id='amount' name='amount' className='w-12 border text-center border-gray-300 h-6'>{amount}</div>
              <button onClick={increment} ><AiOutlinePlus size={25} /></button>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default CategoryCard