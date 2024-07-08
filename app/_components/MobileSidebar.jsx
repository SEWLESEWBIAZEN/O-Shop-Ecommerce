import Link from 'next/link'
import React from 'react'

const MobileSidebar = () => {
    return (
        <div className='rounded-lg bg-gray-200 gap-2 grid absolute bottom-[3.2rem] text-start left-[35%] z-50 px-2 py-4'>
            <Link href="/categories" className=' px-6 py-1 text-black font-semibold hover:bg-[var(--primary-color)] rounded-sm text-[14px]'>CATEGORIES</Link>
            <Link href="/men" className='  px-6 py-1 text-black font-semibold hover:bg-[var(--primary-color)] rounded-sm text-[14px]'>MEN</Link>
            <Link href="/women" className='  px-6 py-1 text-black font-semibold hover:bg-[var(--primary-color)] rounded-sm text-[14px]'>WOMEN</Link>
            <Link href="/jewlery" className='  px-6 py-1 text-black font-semibold hover:bg-[var(--primary-color)] rounded-sm text-[14px]'>JEWLERY</Link>
            <Link href="/perfume" className='  px-6 py-1 text-black font-semibold hover:bg-[var(--primary-color)] rounded-sm text-[14px]'>PERFUME</Link>
            <Link href="/blog" className='  px-6 py-1 text-black font-semibold hover:bg-[var(--primary-color)] rounded-sm text-[14px]'>BLOR</Link>
            <Link href="/hot-offers" className='  px-6 py-1 text-black font-semibold hover:bg-[var(--primary-color)] rounded-sm text-[14px]'>HOT OFFERS</Link>
        </div>
    )
}

export default MobileSidebar