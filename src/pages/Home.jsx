import React, {useContext} from 'react';
//import image
import WomanImg from '../img/home/28.jpg';
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
  className='section bg-gradient-to-b from-neutral-50 via-neutral-200 to-amber-200 max-xs:h-3/5 overflow-hidden'>
    <div className='container mx-auto h-full relative'>
      {/* text and img wraper */}
      <div className='flex flex-col justify-center'>
        <motion.div 
        initial={{opacity: 0, y: '-50%'}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: '-50%'}}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='bottom-80 -left-9 w-full pt-36 pb-14 lg:pt-0 lg:pb-0
        lg:w-auto z-10 lg:absolute flex flex-col justify-center
        items-center lg:items-start'>
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
        <div className='flex justify-end max-h-96 lg:max-h-max max-xs:w-4/5 max-xs:mx-auto'>
          <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          exit={{scale: 0}}
          transition={transition1}
          className='relative bg-gradient-to-b from-neutral-100 to-neutral-100 drop-shadow-2xl bg-blend-normal lg:-right-60 max-xs:h-3/5 max-xs:-top-10 max-md:w-[400px] max-md:mx-auto'>
            <motion.img className='mx-auto h-full lg:h-[70%] lg:ml-[200px]'
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
