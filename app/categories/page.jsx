import React from 'react'
import TopRatedCategories from '../_components/TopRatedCategories'
import FutureIncomings from '../_components/FutureIncomings'
import RecentlyAdded from '../_components/RecentlyAdded'
import FrequentlyOrdered from '../_components/FrequentlyOrdered'



export const metadata = {
  title: "O-Shop | Select Your Categories",
  icons: {
    icon: '/favicon.ico',
  },
  description: "An Online shop that you can order the product you want to purchase, and it is an online show room. Find bunch of categories from which your best is included",
};

const Page = () => {
  return (
    <div className='flex flex-col gap-12 py-6'>
      <div><TopRatedCategories /></div>
      <div><FrequentlyOrdered /></div>
      <div><RecentlyAdded /></div>
      <div><FutureIncomings /></div>
    </div>
  )
}

export default Page