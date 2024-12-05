import React from 'react'
import Image from 'next/image' 
const Profile = () => {
  return (
    <div className='flex justify-around'>
      <Image
        src="/ChrisCrossPlainNavyBlueT-Shirt.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className='my-2 h-1/2 rounded'
      />
      <div>
        <div className='font-bold text-3xl'>Chris Cross Plain Navy Blue T-Shirt</div>
        <div className='font-semibold text-2xl'>250</div>
        <div className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere quasi iste vitae! Tenetur quo impedit repudiandae nesciunt placeat atque.</div>
        <div className='font-semibold'>Select Size</div>
        <div className='flex gap-12'>
          <div className='bg-gray-500 flex justify-center items-center h-8 w-8'>S</div>
          <div className='bg-gray-500 flex justify-center items-center h-8 w-8'>L</div>
          <div className='bg-gray-500 flex justify-center items-center h-8 w-8'>XL</div>
        </div>
        <button className='p-1 w-36 bg-black text-white'>Add To Cart</button>
        <hr />
        <div className='text-gray-500'>100% Cotton Product.</div>
        <div className='text-gray-500'>Cash on Delivery.</div>
        <div className='text-gray-500'>Easy Return Policy.</div>
      </div>
    </div>
  )
}

export default Profile