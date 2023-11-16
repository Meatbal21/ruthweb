import React, {useContext} from "react";
import { useParams } from "react-router-dom";

import { motion } from 'framer-motion';
import { transition1  } from '../transitions'
import { portfolioimg } from "../contants";

import { CursorContext } from '../context/CursorContext';


const ImgCard = ({images}) => (
    

    <div 
    
    className="flex flex-col p-10 ">
        
        {images.image.map((pic,index) => (
        <div 
        className="flex p-4 mb-3 drop-shadow-2xl rounded-md justify-center items-center content-center bg-neutral-100 bg-opacity-50">
            
            <img 
            className="w-auto h-auto lg:h-[60%] lg:w-[60%] rounded-md" 
            src={pic} key={`images-pic-${index}`}/>
            
        </div>
     ))}
    </div>
)


const PortfolioDetail = () => {
    const {Category} = useParams();
    const filterImg = portfolioimg.filter(portfolio => portfolio.category === Category )
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)

    return (
        <>
    <motion.section 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}

    className='section overflow-scroll bg-gradient-to-b from-neutral-50 via-neutral-200 to-amber-200 flex flex-col justify-center items-center'>
        <h1 className="h1 mt-[450px] text-center">{Category}</h1>
        <motion.div
          
        
            className='h-full container mt-24 '>
            <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{opacity: 0, y: '100%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '100%'}}
            
            transition={transition1}
            >
          

            {filterImg.map((images, index, Category) => (
                <ImgCard 
                 onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
                key={`filterImg-id-${index}`} images={images} Category={Category}/>
            ))}
            </motion.div>
        </motion.div>
    </motion.section>
    </>
    );
};


export default PortfolioDetail;
