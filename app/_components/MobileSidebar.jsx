import Link from 'next/link'
import React from 'react'

const MobileSidebar = () => {
    return (
        <div className='rounded-lg bg-gray-200 gap-3 grid absolute bottom-[3.2rem] text-start left-[35%] z-50 px-2 py-4'>
            <Link href="/categories" className='bg-gray-100 px-6 text-black text-[14px]'>CATEGORIES</Link>
            <Link href="/men" className='bg-gray-100  px-6 text-black text-[14px]'>MEN</Link>
            <Link href="/women" className='bg-gray-100  px-6 text-black text-[14px]'>WOMEN</Link>
            <Link href="/jewlery" className='bg-gray-100  px-6 text-black text-[14px]'>JEWLERY</Link>
            <Link href="/perfume" className='bg-gray-100  px-6 text-black text-[14px]'>PERFUME</Link>
            <Link href="/blog" className='bg-gray-100  px-6 text-black text-[14px]'>BLOR</Link>
            <Link href="/hot-offers" className='bg-gray-100  px-6 text-black text-[14px]'>HOT OFFERS</Link>
        </div>
    )
}

export default MobileSidebar