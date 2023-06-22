import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight,} from '@fortawesome/free-solid-svg-icons'
import { sliderData } from '../assets/data'

const Slider = () => {

  /* The slideIndex state is to keep track of the current index of the slide, in order to show or hide the slide 
    using the arrows.
    If the current index of the slide taken from the sliderData array, doesn't match the slideIndex in the state, the
    slide is set a class of hidden, else, just an empty string */

    const [ slideIndex, setSlideIndex ] = useState(0);

    const prevSlide = () => {
        setSlideIndex( slideIndex == 0 ? sliderData.length - 1 : slideIndex - 1)
    };

    const nextSlide = () => {
        setSlideIndex( slideIndex == sliderData.length - 1 ? 0 : slideIndex + 1 )
    };

  return (
    <div className='max-w-[100%] relative flex mx-0 mt-0 min-w-fit'>
        {sliderData.map((slide, index) => (
            <div key={slide.id} className={`max-w-screen items-center flex flex-col sm:flex-row mt-0 min-w-fit ${index != slideIndex ? "hidden" : "" }`}>
                <div className='flex-1 md:p-2'>
                    <img src={slide.img} alt="" className='flex-1 m-auto'/>
                </div>
                <div className='flex-1 p-3 md:p-6 min-w-0 text-center sm:text-left'>
                    <h1 className='text-black font-black text-2xl sm:text-6xl mb-2'>{slide.title}</h1>
                    <p className='text-black text-md md:text-2xl mb-2'>{slide.desc}</p>
                    <button className='text-md md:text-xl bg-blue-400 text-black/80 p-2 rounded-md hover:bg-blue-600 ease-out duration-150'>More info</button>
                </div>
            </div>
        ))}
        <FontAwesomeIcon icon={faAngleLeft} onClick={prevSlide} className="w-8 h-8 bg-blue-400 rounded-2xl p-0.5 text-white absolute flex top-0 bottom-0 m-auto left-12 md:left-32 cursor-pointer opacity-70 hover:bg-blue-700 ease-out duration-150"/>        
        <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide} className="w-8 h-8 bg-blue-400 rounded-2xl p-0.5 text-white absolute flex top-0 bottom-0 m-auto right-12 md:right-32 cursor-pointer opacity-70 hover:bg-blue-700 ease-out duration-150"/>
    </div>
  )
}

export default Slider