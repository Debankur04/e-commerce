'use client'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='w-96 rounded-lg bg-gray-400 p-2'>
        <Image
      src="/website.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      className='my-2'
    />
        <div>
            <div className='flex gap-4'>
                <div className='bg-gray-700 rounded p-0.5'>NextJs</div>
                <div className='bg-gray-700 rounded p-0.5'>Firebase</div>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo possimus id quae, dolore consequuntur facilis atque doloremque itaque minima, iste quod voluptatem nesciunt cupiditate cumque, culpa sapiente velit debitis?
        </div>
    </div>
  )
}

export default Projects