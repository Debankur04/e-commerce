'use client'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between'>
        <div className='text-red-700 text-5xl '>Deb.</div>
        <div className='flex gap-4 mx-2 my-2'>
            <div className='text-white text-xl hover:text-red-700 transition ease-in duration-300'>Home</div>
            <div className='text-white text-xl hover:text-red-700 transition ease-in duration-300'>Abouts</div>
            <div className='text-white text-xl hover:text-red-700 transition ease-in duration-300'>Projects</div>
            <div className='text-white text-xl hover:text-red-700 transition ease-in duration-300'>Contacts</div>
        </div>
    </div>
  )
}

export default Navbar