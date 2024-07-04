import React from "react";

import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobNavbar = () => {
  return (
    <div className="sm:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] px-8">
      <div className="flex justify-between text-[28px] py-2">
        <IoMenuOutline className="icon" />
        <div className="relative">
          <HiOutlineShoppingBag className="icon" />
          <div className="bg-[var(--primary-color)] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-[var(--color-white)] grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        <AiOutlineHome className="icon" />

        <div className="relative">
          <FiHeart className="icon"/>
          <div className="bg-[var(--primary-color)] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-[var(--color-white)] grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        <AiOutlineAppstore className="icon"/>
      </div>
    </div>
  );
};

export default MobNavbar;
