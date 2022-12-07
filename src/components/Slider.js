import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay} from 'swiper'

// css imports
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({details}) => {
  return (
    <Swiper 
        modules={[Navigation,Autoplay]} navigation autoplay breakpoints={{784:{slidesPerView:2,spaceBetween: 10}}}
        className='p-10 lg:w-[70%]'>
      {
        details.map((detail,index) =>{
        return (
            <SwiperSlide key={index}>
              <div>
                <img src={detail.image} alt='executive'/>
              </div>
              <div className='bg-slate-800 text-white text-center p-3 font-semibold text-lg'>
                <h1 className='uppercase'>{detail.name}</h1>
                <h1>{detail.position}</h1>
              </div>
            </SwiperSlide>
        )
        })
      }
    </Swiper>
  )
}

export default Slider
