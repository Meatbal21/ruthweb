import React,{useContext} from 'react';

import Socials from './Socials';
import Logo from '../img/header/newlogo.png';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
  <header className='fixed w-full px-[30px]
  lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center max-xs:bg-neutral-50'>
      <div className='flex flex-col lg:flex-row
      lg:items-center w-full justify-between'>
        {/*logo */}
        <Link to={'/'} 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='max-w-[400px]'>
          <img src={Logo} alt=''/>
        </Link>
        {/*nav initialy hidden - will show in desktop size */}
        <nav 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} 
          className='text-[#696c6d] hover:text-primary transition'>
          Home
          </Link>
          <Link to={'/about'} 
          className='text-[#696c6d] hover:text-primary transition'>
          About
          </Link>
          <Link to={'/portfolio'} 
          className='text-[#696c6d] hover:text-primary transition'>
          Portfolio
          </Link>
          <Link to={'/contact'} 
          className='text-[#696c6d] hover:text-primary transition'>
          Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
       <MobileNav />
    </header>
  );
};

export default Header;
