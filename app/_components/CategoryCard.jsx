'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlinePlus, AiOutlineMinus, AiOutlineHeart, AiFillHeart, AiOutlineLike } from 'react-icons/ai'
import { useCartContext, useFavoriteContext } from '../_components/providers/CartProvider'
import { usePathname } from 'next/navigation'

const CategoryCard = ({ id, img, title, desc, fav, priceHint, discount, quantity }) => {

  //context states
  const { cartItems, setCartItems } = useCartContext();
  const { favoriteItems, setFavoriteItems } = useFavoriteContext();

  //local states /hook states
  const [amount, setAmount] = useState(0);
  const [favorite, setFavorite] = useState(false);

  //accessing pathname of the specific page
  const pathname = usePathname();

  //adding to cart
  const handleAddToCart = () => {
    const cartItem = {
      id: id,
      img: img,
      title: title,
      desc: desc,
      fav: fav,
      priceHint: priceHint,
      quantity: amount
    }
    const duplicated = cartItems.some((item) => item.img === cartItem.img);


    if (!duplicated) {
      const newCartItems = [...cartItems, cartItem];
      setCartItems(newCartItems);

    } else {
      alert("Item already Added! go to your cart and remove it to add it again")
    }
  }

  //removing an item from cart
  const removeFromCart = () => {
    const updatedCartItems = cartItems.filter(item => item.img !== img);
    setCartItems(updatedCartItems)
  }

  //adding items to favorite
  const handleAddToFavorite = () => {
    // setFavorite(!favorite);
    const favoriteItem = {
      id: id,
      img: img,
      title: title,
      desc: desc,
      fav: fav,
      priceHint: priceHint,

    }
    const duplicated = favoriteItems.some((item) => item.img === img);
    setFavorite(duplicated)

    if (pathname === "/categories/favorite") {
      const updatedFavoriteItems = favoriteItems.filter(item => item.img !== favoriteItem.img);
      setFavoriteItems(updatedFavoriteItems);
    } else if (!duplicated) {
      const newFavoriteItems = [...favoriteItems, favoriteItem];
      setFavoriteItems(newFavoriteItems);

    }
  }

  //decrement
  const decrement = () => {
    setAmount(prev => Math.max(prev - 1, 0));
  }

  //incrementing the amouny of an item
  const increment = () => {
    setAmount(prev => Math.min(prev + 1, 100));
  }
  //render links
  const renderLikes = () => {
    const likes = []

    for (let i = 1; i <= fav; i++) {
      likes.push(<AiOutlineLike key={i} size={12} className='text-orange-800' />)
    }


    return likes;
  }

  //rendering 5 likes
  const render5Likes = () => {
    const likes = []

    for (let i = 1; i <= 5; i++) {
      likes.push(<AiOutlineLike key={i} size={12} className='text-orange-800' />)
    }


    return likes;
  }

  //rendering 3 likes
  const render3Likes = () => {
    const likes = []

    for (let i = 1; i <= 3; i++) {
      likes.push(<AiOutlineLike key={i} size={12} className='text-orange-800' />)
    }


    return likes;
  }
  return (
    <div className='h-auto'>
      <div className={`h-full gap-1 bg-gray-50 hover:bg-white border border-gray-200 rounded-2xl    mx-auto p-2 `}>
        <div className={`${(id % 2 !== 0) ? "sm:flex-row" : "sm:flex-row-reverse"} flex flex-col justify-evenly items-center`}>

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
              <div className='cursor-pointer'
                onClick={handleAddToFavorite}>
                {(favorite || pathname === "/categories/favorite") ? <AiFillHeart size={25} color='var(--primary-color)' /> : <AiOutlineHeart size={25} />}
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-row items-center justify-between mt-3 w-[100%] px-3`}>
          <div className='flex flex-col-reverse sm:flex-row  mx-auto place-items-center gap-3'>
            {pathname !== "/categories/cart"
              ? <button
                disabled={amount < 1 ? true : false}
                onClick={handleAddToCart}
                className={`${amount < 1 ? "bg-gray-500" : "bg-blue-600"} text-[12px] py-2 px-3 text-white rounded-md hover:${amount < 1 ? "none" : "bg-blue-500"}`}>
                Add to Cart
              </button> :
              <button
                onClick={removeFromCart}
                className='bg-red-600 text-[12px] py-2 px-3 text-white rounded-md hover:'>Remove From Cart</button>
            }
            {
              pathname !== "/categories/cart"
                ? <div className='flex flex-row p-[6px] rounded-md items-center justify-center bg-slate-300'>
                  <button onClick={decrement}><AiOutlineMinus size={15} /></button>
                  <div id='amount' name='amount' className='w-8 border text-center text-[14px] border-gray-300 h-auto'>{amount}</div>
                  <button onClick={increment} ><AiOutlinePlus size={15} /></button>
                </div> : ""
            }
            {quantity && <div>Quantity:{quantity}</div>}
          </div>
          <AiOutlineArrowRight
            size={25}
            className=' text-gray-400 hover:text-[var(--primary-color)] cursor-pointer font-bold'
          />
        </div>
      </div>
    </div>

  )
}

export default CategoryCard