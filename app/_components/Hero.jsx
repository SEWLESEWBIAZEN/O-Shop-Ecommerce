'use client'

import React from 'react'
import { slidedata } from '../_data/slidedata'
import Slider from "react-slick";
import Slide from './Slide'

const Hero = () => {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };
    return (
        <div className='mt-10 z-0'>
            <div className='container'>
                <Slider {...settings}>
                    {slidedata.map((item) => {
                        return (
                            <Slide
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                mainTitle={item.mainTitle}
                                price={item.price}
                            />
                        )
                    })}
                </Slider>
            </div>
        </div>

    )
}

export default Hero