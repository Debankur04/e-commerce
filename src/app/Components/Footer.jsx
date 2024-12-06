import React from 'react'
import Image from 'next/image'
import { Send } from 'lucide-react'

const Footer = () => {
  return (
    <div>
        <div className='bg-green-400 flex justify-around p-4 mx-28 rounded-2xl my-6'>
            <div className='w-1/2'>
                <div className='font-semibold text-3xl py-8'>Fast And Stylish Fits at the your doorstep</div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas iure eveniet maxime, necessitatibus atque enim.</div>
                <div className='flex gap-2 py-8'>
                    <input type="email" name="" id="" className='w-2/3 h-8 rounded-lg'/>
                    <button className=' h-8 w-1/12 rounded-lg bg-red-600 flex justify-center items-center'><Send /> Send</button>
                </div>
            </div>
            <Image
            src="/Placeholder_Shirt_Banner.png"
            width={500}
            height={500}
            alt="Picture of the author" 
            className='h-60 w-40'
            />
        </div>
        <div className='flex justify-evenly w-full my-16'>
            <div className="bg-gray-500 rounded-xl w-1/6 flex flex-col items-center justify-center px-2 py-1">
                <div className="text-xl font-bold">Best Prices</div>
                <div className="">Orders of 250 or more</div>
            </div>
            <div className="bg-gray-500 rounded-xl w-1/6 flex flex-col items-center justify-center px-2 py-1">
                <div className="text-xl font-bold">Free Delivery</div>
                <div className="">Orders of 500 or more</div>
            </div>
            <div className="bg-gray-500 rounded-xl w-1/6 flex flex-col items-center justify-center px-2 py-1">
                <div className="text-xl font-bold">Great Daily Deal</div>
                <div className="">Special Section for that</div>
            </div>
            <div className="bg-gray-500 rounded-xl w-1/6 flex flex-col items-center justify-center px-2 py-1">
                <div className="text-xl font-bold">Wide Assortment</div>
                <div className="">Sending Happiness to every corner of the globe</div>
            </div>
            <div className="bg-gray-500 rounded-xl w-1/6 flex flex-col items-center justify-center ">
                <div className="text-xl font-bold">Easy Returns</div>
                <div className="">Cuase we understand mistakes are the fun part of life</div>
            </div>
        </div>
        <div className='flex justify-evenly'>
            <div>
                <div className='font-semibold text-2xl'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
            </div>
            <div>
                <div className='font-semibold text-2xl'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
            </div>
            <div>
                <div className='font-semibold text-2xl'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
                <div className='text-lg'>Placeholder</div>
            </div>
        </div>
    </div>
  )
}

export default Footer