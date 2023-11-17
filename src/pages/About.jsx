import React, {useContext} from 'react';
import WomanImg from '../img/about/aboutme.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)

  return (
  <motion.section 
  initial={{opacity: 0, y: '100%'}}
  animate={{opacity: 1, y: 0}}
  exit={{opacity: 0, y: '100%'}}
  transition={transition1}
  className='section overflow-scroll bg-gradient-to-b from-neutral-50 via-neutral-200 to-amber-200'>
    <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
     className='container mx-auto h-full relative'>
      {/* text & img wraper */}
      <div 
      
      className='flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 text-center
      lg:text-left lg:pt-16 '>
        <div className='bg-neutral-50 drop-shadow-2xl bg-blend-normal flex-1 max-h-full lg:max-h-max
        order-2 lg:order-none'>
          <img className='relative top-1 xs:top-2 max-xs:h-full max-xs:w-full drop-shadow-2xl' src={WomanImg}/>
        </div>
        <motion.div 
          initial={{opacity: 0, y: '-80%'}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '-80%'}}
          transition={transition1}
        className='flex-1 pt-36 pb-14 lg:pt-0
        lg:w-auto z-10 flex flex-col justify-center
        items-center lg:items-start max-xs:pt-60'>
          <h1 className='h1'>About Me</h1>
          <p className='mb-10 w-4/5 xs:mb-12 xs:max-w-sm'>
          Hello, my name is Ruth!
          i've been a <b>photographer</b> for nearly 11 years now,
          i've been working in the phottography world since 2012.
            <br/>  
            <br/>
          Since childhood i've fascinated with photography.
          Whether i was on the church services or family & friends parties.
          I have always loved to capture authentic moments.
          <br/>
          <br/>
          To me, documenting people's emotions is what makes photography special.
          My goal is to make all my clien have a good memories throughout my photos.
          </p>
          <Link to={'/portfolio'} className='btn'>View my work</Link>
        </motion.div>
      </div>
    </div>
    </motion.section>
  );
};

export default About;
