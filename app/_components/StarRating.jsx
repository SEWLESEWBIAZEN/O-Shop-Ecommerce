import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'


const StarRating = ({ number }) => {
    const renderdStars = () => {
        let fulstars = Math.floor(number);
        let halfstars =  number % 1 >= 0.5;       
        let stars = []

        if (parseInt(fulstars) > 0) {
            for (let i = 1; i <= fulstars; i++) {
                stars.push(<FaStar key={i} className='text-[var(--primary-color)]'/>)
            }
        }
        if (halfstars) {
            stars.push(<FaStarHalf key="half" className='text-[var(--primary-color)]' />)
        }

        let emptystars=5-stars.length;
        if (parseInt(emptystars) > 0) {
            for (let i = 1; i <= emptystars; i++) {
                stars.push(<AiOutlineStar key={`empty-${i}`}className='text-[var(--primary-color)]' />)
            }
        }
        return stars;
    }



    return (
        <div className='flex items-center'>
            {renderdStars()}
        </div>
    )
}

export default StarRating