import Image from "next/image";
import React from "react";
import {userImage} from '../_data/image-export'
import '../globals.css'
import { BsQuote } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div>
      <div className="container py-16 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src={userImage.img}
                width={80}
                height={80}
                alt="profile"
              />
              <h2 className="text-gray-500 font-black text-[20px]">Elsa Doe</h2>
              <p>CEO & Founder Invision</p>
              <BsQuote 
              className="h-20 w-20 text-[var(--primary-color)]"
              />           
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </div>

          <div className={`bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center `}>
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $20 <strong>Shop Now</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
