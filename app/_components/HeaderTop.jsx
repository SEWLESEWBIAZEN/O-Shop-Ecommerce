import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Page = () => {
  return (
    <div className=' border-b border-gray-300'>
      <div className='mx-5 w-full p-3 flex flex-row justify-center gap-20 items-center'>
        <div className='hidden md:flex md:flex-row gap-2 '>
          <div className='social-media-link bg-gray-400 p-1 rounded-md'><FaFacebook /></div>
          <div className='social-media-link bg-gray-400 p-1 rounded-md'><FaTwitter /></div>
          <div className='social-media-link bg-gray-400 p-1 rounded-md'><FaInstagram /></div>
          <div className='social-media-link bg-gray-400 p-1 rounded-md'><FaLinkedin /></div>
        </div>
        <div className="text-gray-500 text-[10px] md:text-[12px]">
          <strong>FREE SHIPPING </strong>
          THIS WEEK ORDER OVER - $55
        </div>
        <div className='flex flex-col sm:flex-row gap-2 pe-2'>
          <select name='currency' id="currency" className=' p-1 border border-gray-200 text-[10px] md:text-[12px] text-gray-400'>
            <option value="ETB">ETB</option>
            <option value="$USD">$USD</option>
            <option value="€EURO">€EURO</option>
          </select>
          <select name='language' id='language' className='p-1 border border-gray-200 text-[10px] md:text-[12px] text-gray-400'>
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Page