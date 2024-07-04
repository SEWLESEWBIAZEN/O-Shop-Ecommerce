import React from 'react'

const Page = () => {
  return (
    <div className='font-semibold sm:text-[12px] lg:text-[18px] hidden sm:flex sm:flex-row sm:gap-2 md:gap-4 justify-center py-3 px-1 items-center'>      
      <div className=' navbar__link cursor-pointer relative'>HOME</div>
      <div className=' navbar__link cursor-pointer relative'>CATEGORIES</div>
      <div className=' navbar__link cursor-pointer relative'>{`MEN'S`}</div>
      <div className=' navbar__link cursor-pointer relative'>{`WOMEN'S`}</div>
      <div className=' navbar__link cursor-pointer relative'>JEWLERY</div>
      <div className=' navbar__link cursor-pointer relative'>PERFUME</div>
      <div className=' navbar__link cursor-pointer relative'>BLOG</div>
      <div className=' navbar__link cursor-pointer relative'>HOT OFFERS</div>
    </div>
  )
}

export default Page