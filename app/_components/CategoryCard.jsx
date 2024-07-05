import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaThumbsUp } from 'react-icons/fa'


const CategoryCard = ({ img, title, desc, fav, priceHint }) => {

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
    <div className='h-auto lg:max-h-[300px]'>
      <div className='h-full bg-gray-50 hover:bg-white border border-gray-50 rounded-2xl flex flex-col sm:flex-row justify-evenly mx-auto p-3'>

        <Image
          src={img}
          width={200}
          height={100}
          alt='Category image'
          className='rounded-2xl mx-auto sm:mx-0 cursor-pointer '
        />

        <div className='flex flex-col gap-3 justify-center'>
          <h1 className='text-[var(--primary-color)] font-semibold text-md'>{title}</h1>
          <p className='text-gray-500 max-w-[300px] text-center md:text-start'>{desc}</p>
          <div className='flex flex-row  text-gray-500 items-center justify-between'>
            <div className='flex flex-row -space-x-1 gap-1'>
              {fav <= 15 && (<div className='flex flex-row items-center gap-1'>{renderLikes()}</div>)}
              {(fav > 15 && fav <= 30) && (
                <div className='flex flex-row items-center gap-1'>{render5Likes()}.......</div>
              )
              }
              {fav > 30 && (
                <div className='flex flex-row items-center gap-1'>{render5Likes()}.......{render3Likes()}</div>
              )
              }

            </div>
            <p className='text-[12px]'>(<span>{fav}</span>)</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className=''>{priceHint}</p>
            <AiOutlineArrowRight
              size={25}
              className=' text-gray-400 hover:text-[var(--primary-color)] cursor-pointer font-bold'
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default CategoryCard