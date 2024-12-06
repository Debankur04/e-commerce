'use client'

import { Instagram, Linkedin, Twitter, Facebook,Send, Phone} from 'lucide-react'
import React from 'react'

const Contacts = () => {
  return (
    <div className='bg-black text-white p-4 flex justify-around'>
        <div>
          <div className='text-5xl py-8'>Contact Me</div>
          <div className='flex gap-4'>
          <Send/><div>debankurdutta04@gmail.com</div>
          </div>
          <div className='flex gap-4'>
          <Phone /><div>6291221388</div>
          </div>
          <div className='flex gap-4'>
          <div><a  href='https://www.instagram.com/debankur_04/'><Instagram /></a></div>
          <div  ><a href='https://www.linkedin.com/in/debankur-dutta-8871a22b0/'><Linkedin/></a></div>
          </div>
        </div>
        <div className='w-1/2 my-20'>
          <div>Name</div>
          <input type="text"  className='w-full'/>
          <div>Email</div>
          <input type="email"  className='w-full'/>
          <div>Message</div>
          <textarea name="" id="" className='w-full text-black'></textarea>
        </div>
    </div>
  )
}

export default Contacts