import React, {useContext, useState} from 'react';
import { portfolioimg } from '../contants';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules'



const Card = ({portimg}) => (


  <div 
    className='text-center text-[20px]'
   key={portimg?.category}>
    <div className='max-w-[250px] lg:max-w-[320px]
    h-[187px] lg:h-[220px] bg-accent border-solid border-4 border-neutral-50 '>
        <img className='object-cover h-full w-full lg:h-[220px]
        hover:scale-110 transition-all duration-500' 
        src={portimg?.image?.[0]}/>
    
    </div>
    <Link  to={`/details/${portimg?.category}`}>
      {portimg.category}
      </Link>

  </div>

  
)

const Portfolio = () => {
  
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  const [index, setIndex] = useState(0)

  const handleRight = () => {
    setIndex(index+1)
    if(index===portfolioimg.length-1)(
      setIndex(0)
    )
  }

  return( 
    <>
  <motion.section 
  initial={{opacity: 0, y: '100%'}}
  animate={{opacity: 1, y: 0}}
  exit={{opacity: 0, y: '100%'}}
  transition={transition1}
  className='section bg-gradient-to-b from-neutral-50 via-neutral-200 to-amber-200 overflow-scroll'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start gap-x-24 text-center
      lg:text-left pt-24 lg:pt-36 pb-8'>
        <motion.div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{opacity: 0, y: '-80%'}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '-80%'}}
          transition={transition1}
        className='flex flex-col lg:items-start w-full ' >
          
          <div className='mb-12 w-full h-full flex justify-center relative'>
            <Swiper
            effect={'coverFlow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className='swiper_container'>
                <SwiperSlide>
                <img 
                onClick={handleRight}
                className='' 
                src={portfolioimg[0]?.image[0]} alt='slide_image' />
                </SwiperSlide>
                <SwiperSlide>
                <img 
                className='' 
                src={portfolioimg[1]?.image[3]} alt='slide_image' />
                </SwiperSlide>
                <SwiperSlide>
                <img 
                className='' 
                src={portfolioimg[1]?.image[7]} alt='slide_image' />
                </SwiperSlide>
                <SwiperSlide>
                <img 
                className='' 
                src={portfolioimg[2]?.image[0]} alt='slide_image' />
                </SwiperSlide>
                <SwiperSlide>
                <img 
                className='' 
                src={portfolioimg[3]?.image[0]} alt='slide_image' />
                </SwiperSlide>
                <SwiperSlide>
                <img 
                className='' 
                src={portfolioimg[2]?.image[1]} alt='slide_image' />
                </SwiperSlide>
              
                <div className="slider-controller">
                  <div className="swiper-button-prev slider-arrow">
                  <ion-icon name='arrow-back-outline'></ion-icon>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                  <ion-icon name='arrow-forward-outline'></ion-icon>
                  </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
            </div>
            
        </motion.div>
        <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='w-full'>
          <div
          
          className='grid grid-cols-2 lg:gap-4 w-full j'>
          {portfolioimg.map((portimg, index) =>(
            <Card key={index} portimg={portimg} />
          ))}
          </div>
          <div>
          <Link to={'/contact'} className='btn w-[60%] mx-auto mt-[30px]'>
            Hire Me</Link>
          </div>
        
        </div>
      </div>
    </div>

  </motion.section>
  </>
  );
};

export default Portfolio;
