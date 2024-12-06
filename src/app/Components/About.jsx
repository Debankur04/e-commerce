'use client'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex  justify-evenly bg-black text-white'>
      <Image
      src="/Main-Image.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      className='my-2 h-3/4 rounded-lg'
    />
      <div className='w-3/5'>
        <div className='flex justify-center text-4xl my-8'>ABOUT ME</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores incidunt voluptatem excepturi dolor voluptatibus est ut, nisi ducimus. A accusamus numquam cum sint nobis rerum molestias sapiente error optio!</div>
        <div className='flex justify-evenly w-full gap-80 my-8 text-xl'>
          <div>Skills</div>
          <div>Experience</div>
          <div>Education</div>
        </div>
        <div className='text-l'>
          <ul>
            <li><span className='text-red-600'>NextJS</span> <br /> Developing Front-End of Websites</li>
            <li><span className='text-red-600'>Python</span> <br /> Developing Python projects and AIML</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><span className='text-red-600'>CO- Founder OnCode</span> <br /> Freelancing Company around Web Developement</li>
            <li><span className='text-red-600'>4X Hackathon Winner</span> <br /> 2X GNIT, 1X IEM, 1X IIT RPR</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><span className='text-red-600'>B. Tech CSE</span> <br /> JIS University</li>
            <li><span className='text-red-600'>Higher Secondary</span> <br /> Aditya Academy Sr. Secondary</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About