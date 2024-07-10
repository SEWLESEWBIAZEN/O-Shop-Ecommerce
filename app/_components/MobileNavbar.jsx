'use client'

import React, { useState } from "react";

import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import Link from "next/link";
import MobileSidebar from './MobileSidebar'
import { useCartContext, useFavoriteContext } from "./providers/CartProvider";

const MobNavbar = () => {
  const { cartItems } = useCartContext();
  const { favoriteItems } = useFavoriteContext();

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (

    <div className="sm:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] px-8">
      <div className="flex justify-between text-[28px] py-2">
        <div onClick={toggleSidebar}>
          {isOpen ? <IoCloseOutline className="icon" /> : <IoMenuOutline className="icon" />}
          {isOpen && <MobileSidebar />}

        </div>
        <div className="relative">
          <Link href="/categories/cart"><HiOutlineShoppingBag className="icon" /></Link>
          <div className="text-[var(--primary-color)] font-bold rounded-full absolute top-0 right-0 w-auto h-auto text-[12px] bg-[var(--color-white)] grid place-items-center translate-x-1 -translate-y-1 ">
            {cartItems.length}
          </div>
        </div>

        <Link href="/"><AiOutlineHome className="icon" /></Link>

        <div className="relative">
          <Link href="/categories/favorite"><FiHeart className="icon" /></Link>
          <div className="text-[var(--primary-color)] rounded-full font-bold absolute top-0 right-0 w-[18px] h-[18px] text-[12px] bg-[var(--color-white)] grid place-items-center translate-x-1 -translate-y-1">
            {favoriteItems.length}
          </div>
        </div>

        <Link href="/categories"><AiOutlineAppstore className="icon" /></Link>
      </div>
    </div>

  );
};

export default MobNavbar;
