import React from 'react'

const Signin = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='h-1/2 w-1/4 bg-green-500 flex justify-center items-center'>
        <div id='signin'>
            <p className='text-center text-3xl font-semibold p-8 underline'>Sign-In</p>
            <p className='font-semibold'>E-Mail</p>
            <input type="text" className='border-black border-2 my-1' placeholder='John Doe'/>
            <p className='font-semibold'>Password</p>
            <input type="text" className='border-black border-2 my-1' placeholder='1234'/>
            <p className='font-semibold'>Confirm Password</p>
            <input type="text" className='border-black border-2 my-1' placeholder='1234'/>
            <div className='w-full flex justify-center p-2'>
                <button className='p-1 bg-white'>Sign-In</button>
            </div>
            <p className='text-center hover:underline'>Forget Password?</p>
            <p className='text-center hover:underline'>New User? Sign-Up</p>
        </div>
        </div>
    </div>
  )
}

export default Signin