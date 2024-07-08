'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import clsx from 'clsx'
import { links } from '../_constants/links'
import Link from 'next/link'


const Page = () => {
  const pathname = usePathname();
  return (
    <div className='font-semibold sm:text-[12px] lg:text-[18px] hidden sm:flex sm:flex-row sm:gap-2 md:gap-4 justify-center py-3 px-1 items-center'>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("navbar__link cursor-pointer relative ",
              {
                ' text-[var(--primary-color)] bg-gray-200 py-1 px-2 rounded-md': pathname === link.href
              },
            )}
          >
            <p className="hidden sm:block">{link.name}</p>
          </Link>
        );
      })}

    </div>
  )
}

export default Page