import React, {useContext, useRef, useState} from 'react';
import WomanImg from '../img/contact/foto.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  // hcNhYrrXWvvLbVsdZ
  // template_dwkjcqd
  // service_h55snup

    emailjs.send(
      'service_h55snup',
      'template_dwkjcqd',
      {
        from_name: form.name,
        to_name: 'Ruth',
        from_email: form.email,
        to_email: 'Ruth1551sumargo@gmail.com',
        message: form.message,
      },
      'hcNhYrrXWvvLbVsdZ'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Something went wrong.')
      })
  }


  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)

  return (
  <motion.section 
  initial={{opacity: 0, y: '100%'}}
  animate={{opacity: 1, y: 0}}
  exit={{opacity: 0, y: '100%'}}
  transition={transition1}
  className='section overflow-hidden bg-gradient-to-b from-neutral-50 via-neutral-200 to-amber-200 '>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full
        items-center justify-start pt-36 gap-x-8 text-center
        lg:text-left'>
          <motion.div 
            initial={{opacity: 0, y: '100%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '100%'}}
            transition={transition1}
          className='hidden lg:flex bg-purple-100 absolute
          bottom-0 left-0 right-0 top-72 -z-10'>
          </motion.div>
          <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would Love to get connect with you.</p>
            <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-2'>
                <input 
                className='outline-none border-b border-b-primary
                h-[60px] bg-transparent font-secondary
                w-full pl-3 placeholder:text-[#757879]'
                name='name'
                value={form.name}
                onChange={handleChange}
                type='text'
                placeholder='Your Name'/>
                <input 
                className='outline-none border-b border-b-primary
                h-[60px] bg-transparent font-secondary
                w-full pl-3 placeholder:text-[#757879]'
                name='email'
                value={form.email}
                onChange={handleChange}
                type='email'
                placeholder='Your Email'/>
              </div>
              <textarea
              rows={5} 
                className='outline-none border-b border-b-primary
                h-[80px] bg-transparent font-secondary
                w-full pl-3 placeholder:text-[#757879]'
                name='message'
                value={form.message}
                onChange={handleChange}
                type='text'
                placeholder='Your Message'/>

              <button 
              type='submit'
              className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
              {loading ? 'Sending...' : 'Send it'}
              </button>
            </form>
        
          </div>
          {/* <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{opacity: 0, y: '100%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '100%'}}
            transition={{transition: transition1, duration: 1.5}}
          className='lg:flex-1'>
            <img src={WomanImg} alt=''/>
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
