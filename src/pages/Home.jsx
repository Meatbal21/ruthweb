import React, {useContext} from 'react';
//import image
import WomanImg from '../img/home/home.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
  <motion.section
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  transition={transition1}
  className='section '>
    <div className='container mx-auto h-full lg:h-[50%] lg:w-[50%] relative'>
      {/* text and img wraper */}
      <div className='h-full flex flex-col justify-center'>
        <motion.div 
        initial={{opacity: 0, y: '-50%'}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: '-50%'}}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='bottom- -left-[160px] w-full pt-36 pb-14 lg:pt- lg:pb-
        lg:w-auto z-10 lg:absolute flex flex-col justify-center
        items-center lg:items-start '>
          <h1 className='h1'>
            photographer <br />& web design
          </h1>
          <p className='text-[26px] lg:text-[36px]
          font-primary mb-4 lg:mb-12'>
            Philadelphia, USA
          </p>
          <Link to={'/contact'} className='btn mb-[30px]'>
          hire me
          </Link>
        </motion.div>
        <div className='flex justify-center lg:max-h-full max-xs:w-4/5 max-xs:mx-auto'>
          <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          exit={{scale: 0}}
          transition={transition1}
          className='relative w-full gradient drop-shadow-2xl lg:-right-60 max-xs:-top-10 max-md:mx-auto'>
            <motion.img className='mx-auto h-full max-xs:w-full max-xs:h-full lg:h-full lg:w-[80%]'
            whileHover={{scale: 1.1}}
            transition={transition1}
            src={WomanImg} alt=''/>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
  );

};

export default Home;
