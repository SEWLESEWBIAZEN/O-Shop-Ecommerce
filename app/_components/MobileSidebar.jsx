import Link from 'next/link'
import React from 'react'
//MEN", "WOMEN", "JEWLERY", "PERFUME", "BLOG", "HOT OFFERS"}
const links =
    [
        {
            link: "CATEGORIES",
            href: "/categories"
        },
        {
            link: "MEN",
            href: "/mens"
        },
        {
            link: "WOMEN",
            href: "/womens"
        },
        {
            link: "JEWLERY",
            href: "/jewlery"
        },
        {
            link: "PERFUME",
            href: "/perfume"
        },
        {
            link: "BLOG",
            href: "/blog"
        },
        {
            link: "HOT OFFERS",
            href: "/hot-offers"
        },
    ]



const MobileSidebar = () => {
    return (
        <div className='rounded-lg bg-gray-200 gap-2 grid absolute bottom-[3.2rem] text-start left-[35%] z-50 px-2 py-4'>
            {links.map((link) => {
                return (<Link href={link.href} className=' px-6 py-1 text-black font-semibold hover:text-[var(--primary-color)] rounded-sm text-[14px]'>{link.link}</Link>)
            })}

        </div>
    )
}

export default MobileSidebar